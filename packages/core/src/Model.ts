import { isEmpty, startsWith } from "lodash";
import { Model as BaseModel } from "pinia-orm";
import { v4 } from "uuid";

interface Model extends BaseModel {
  id: string | number;
  baseUrl: string;
  created_at?: string;
  updated_at?: string;
  uuid: boolean;

  $isNew(): boolean;
  $baseUrl(): string;
}

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
}

export default Model;
