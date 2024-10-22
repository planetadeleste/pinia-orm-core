import type { Collection, Repository } from "pinia-orm";
import type { Response as OrmAxiosResponse, Request } from "@pinia-orm/axios";
import type { AxiosResponse } from "axios";
import type { ComputedRef, Ref } from "vue";
import type { Model } from "./index";

interface ApiLinksResponse {
  first: string;
  last: string;
  prev?: string;
  next?: string;
}

interface ApiMetaResponse {
  current_page: number;
  last_page: number;
  path: string;
  per_page: number;
  total: number;
  from?: string;
  to?: string;
}

interface Result<T = Record<string, any>> {
  status: boolean;
  data: T;
  message: string | null;
  code: string | null;
  links?: ApiLinksResponse[];
  meta?: ApiMetaResponse[];
}

type ResultData<T> = Result<T> & Record<string, any>;

declare class Response<T = any> {
  response?: AxiosResponse;

  constructor(response?: AxiosResponse);

  getData(): ResultData<T>;

  getStatus(): number;

  getHeaders(): any;

  getValidationErrors(): Record<string, any> | null;
}

interface FileData {
  disk_name: string;
  thumb: string;
  path: string;
  file_name: string;
  ext: string;
  title: string;
  description: string;
}

type OrmBeforeSaveEvent<M = Model, D = Record<string, any>> = [M, D];
type Config = Request["config"];
type Constructor<T> = new (...args: any[]) => T;

interface fnUseOrmModel<M extends Model = Model, R extends Request = Request> {
  all: () => Collection<M> | null;
  find: (id: number | string, obConfig?: Config) => Promise<M | null>;
  filterBy: (filters: Record<string, any>) => void;
  where: (filters: string | Record<string, any>, value?: any) => void;
  cleanFilters: () => void;
  page: (sValue: number) => void;
  itemsPerPage: (sValue: number) => void;
  repo: Repository<M>;
  repoAxios: R;
  response: ComputedRef<OrmAxiosResponse | undefined>;
  loading: Ref<boolean>;

  get: <T = Collection<M>>(
    sUrl?: string,
    obConfig?: Config,
  ) => Promise<T | null>;
  save: (
    obModel?: M,
    obConfig?: Config | undefined,
  ) => Promise<OrmAxiosResponse>;
  make: (obData: Partial<M> | M) => Constructor<M> | M;
  remove: (id: string | number) => Promise<OrmAxiosResponse>;
  model: M;
  setConfig: (obConfig?: Config) => {
    dataTransformer: (response: Record<string, any>) => any;
  } & Config;

  request: (sUrl?: string, obConfig?: Config) => Promise<OrmAxiosResponse>;
}

declare function useOrmModel<M extends Model, R extends Request = Request>(
  obModel: Constructor<M>,
): fnUseOrmModel<M, R>;

export type {
  ApiLinksResponse,
  ApiMetaResponse,
  Config,
  Constructor,
  FileData,
  OrmBeforeSaveEvent,
  Response,
  Result,
  ResultData,
  fnUseOrmModel,
  useOrmModel,
};
