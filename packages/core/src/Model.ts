import { isEmpty, startsWith } from "lodash";
import { Model as BaseModel } from "pinia-orm";
import { v4 } from "uuid";

class Model extends BaseModel {
  static baseUrl: string;
  static uuid = false;

  static creating<M extends Model = Model>(model: M) {
    if (model.uuid && isEmpty(model.$getIndexId())) {
      model.id = `-${v4()}`;
    }
  }

  $isNew(): boolean {
    return !this.id || startsWith(this.id as string, "-") || !this.created_at;
  }

  $baseUrl(): string {
    return this.baseUrl;
  }

  declare uuid: boolean;
  declare id: string | number;
  declare baseUrl: string;
  declare created_at: string;
}

export default Model;
