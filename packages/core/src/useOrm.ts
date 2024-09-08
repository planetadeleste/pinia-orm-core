// eslint-disable-next-line import/named
import { computed, ref, shallowRef, toRaw } from "vue";
import { useAxiosRepo } from "@pinia-orm/axios";
import { useEventBus } from "@vueuse/core";
import { assign, has, isEmpty, isPlainObject, isString, set } from "lodash";
import { useRepo } from "pinia-orm";

import type { Request, Response } from "@pinia-orm/axios";
import type { Collection } from "pinia-orm";
import type {
  Config,
  Constructor,
  fnUseOrmModel,
  OrmBeforeSaveEvent,
} from "./types";
import type { Model } from "./index";

export function useOrmModel<M extends Model, R extends Request = Request>(
  obModel: Constructor<M>,
): fnUseOrmModel<M, R> {
  const repo = useRepo<M>(obModel);
  const repoAxios = useAxiosRepo<M>(obModel).api() as R;
  // @ts-ignore
  const baseUrl: string = obModel.baseUrl;
  const loading = ref<boolean>(false);
  const _page = ref(0);
  const _itemsPerPage = ref(10);
  const _query = ref<Record<string, any>>({});
  const _response = shallowRef<Response | undefined>();

  /* EVENTS */
  const evBeforeSave = useEventBus<OrmBeforeSaveEvent>("orm.before.save");

  const response = computed<Response | undefined>(() => {
    return _response.value;
  });

  repo.all();

  const get = async <T = Collection<M>>(
    sUrl?: string,
    obConfig: Config = {},
  ) => {
    if (!sUrl) {
      sUrl = baseUrl;
    }

    if (_page.value) {
      set(_query.value, "page", _page.value);
    }

    if (_itemsPerPage.value) {
      set(_query.value, "limit", _itemsPerPage.value);
    }

    if (!isEmpty(_query.value)) {
      set(obConfig, "params", toRaw(_query.value));
    }

    loading.value = true;
    _response.value = await request(sUrl, setConfig(obConfig));
    loading.value = false;
    const obResponse = _response.value.response.data;
    const obResponseData = has(obResponse, "data")
      ? obResponse.data
      : obResponse;

    return repo.make(obResponseData as M[]) as T;
  };

  const all = () => {
    return repo.all();
  };

  const find = async (
    id: number | string,
    obConfig?: Config,
  ): Promise<M | null> => {
    loading.value = true;
    const obResponse = await request(`${baseUrl}/${id}`, setConfig(obConfig));
    loading.value = false;

    return repo.make(obResponse.response.data.data as M);
  };

  const request = async (
    sUrl?: string,
    obConfig: Config = {},
  ): Promise<Response> => {
    if (!sUrl) {
      sUrl = baseUrl;
    }

    return await repoAxios.get(sUrl, setConfig(obConfig));
  };

  const save = async (
    obOrmModel?: M,
    obConfig?: Config | undefined,
  ): Promise<Response> => {
    if (!obOrmModel) {
      obOrmModel = repo.getModel();
    }

    loading.value = true;
    const obData = obOrmModel.$toJson();
    evBeforeSave.emit([obOrmModel, obData]);
    const obReturn = obOrmModel.$isNew()
      ? await repoAxios.post(baseUrl, obData, obConfig)
      : await repoAxios.put(`${baseUrl}/${obOrmModel.id}`, obData, obConfig);
    loading.value = false;

    return obReturn;
  };

  const make = (obData: Partial<M> | M): Constructor<M> | M => {
    obModel = repo.make(obData) as unknown as Constructor<M>;

    return obModel;
  };

  const remove: (id: string | number) => Promise<Response> = async (
    id: string | number,
  ) => {
    loading.value = true;
    const obResponse = await repoAxios.delete(`${baseUrl}/${id}`, {
      delete: id,
    });
    loading.value = false;

    return obResponse;
  };

  /**
   * Filters the query by the provided filters
   * This function filters the query object by the provided filters.
   * It handles both string and object filters.
   *
   * @param filters - The filters to apply. Can be a string or object
   * @param value - Optional value if filters is a string
   *
   * If filters is a string and value is provided, it will set
   * the property on the query object.
   * If filters is an object, it will assign the object
   * properties to the query.
   */
  const where = (filters: string | Record<string, any>, value?: any) => {
    if (isString(filters) && value && !isEmpty(value)) {
      set(_query.value, filters, value);
    }

    if (isPlainObject(filters)) {
      assign(_query.value, filters);
    }
  };

  /**
   * Filters the query by the provided filters object
   *
   * @param filters - The filters object to apply
   *
   * This function filters the query by the provided filters object.
   * It first checks if there are already filters defined on the query
   * and clears them if so. Then it assigns the passed filters
   * to the query's filters property.
   */
  const filterBy = (filters: Record<string, any>) => {
    if (!has(_query.value, "filters")) {
      cleanFilters();
    }

    assign(_query.value.filters, filters);
  };

  const cleanFilters = () => {
    set(_query.value, "filters", {});
  };

  const page = (sValue: number) => {
    _page.value = sValue;
  };

  const itemsPerPage = (sValue: number) => {
    _itemsPerPage.value = sValue;
  };

  const setConfig = (obConfig?: Config) => {
    return assign(
      {
        dataTransformer: (response: Record<string, any>) => {
          return has(response, "data.data")
            ? response.data.data
            : response.data;
        },
      },
      obConfig,
    );
  };

  return {
    all,
    cleanFilters,
    filterBy,
    find,
    get,
    itemsPerPage,
    loading,
    make,
    model: repo.getModel(),
    page,
    remove,
    repo,
    repoAxios,
    request,
    response,
    save,
    setConfig,
    where,
  };
}
