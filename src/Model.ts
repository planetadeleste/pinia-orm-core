import { isEmpty, startsWith }         from "lodash";
import type { Element } from "pinia-orm";
import { Model as BaseModel } from "pinia-orm";
import { v4 }                          from "uuid";

interface Model<T extends Element = Element> extends BaseModel {
  id: string | number;
  created_at?: string;
  updated_at?: string;
  uuid: boolean;
}

class Model<T extends Element = Element> extends BaseModel {
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
}

export default Model;
