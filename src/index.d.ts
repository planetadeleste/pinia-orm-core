import { Model as BaseModel } from "pinia-orm";
import type { Element , ModelOptions } from "pinia-orm";

export interface ApiLinksResponse {
  first: string;
  last: string;
  prev?: string;
  next?: string;
}

export interface ApiMetaResponse {
  current_page: number;
  last_page: number;
  path: string;
  per_page: number;
  total: number;
  from?: string;
  to?: string;
}

export interface Result<T = Record<string, any>> {
  status: boolean;
  data: T;
  message: string | null;
  code: string | null;
  links?: ApiLinksResponse[];
  meta?: ApiMetaResponse[];
}

interface Model<T extends Element = Element> extends BaseModel {
  $getOriginal: () => T;
  $getAttributes: () => T;
  $toJson: (model?: BaseModel, options?: ModelOptions) => T;

  id: string | number;
  created_at?: string;
  updated_at?: string;

  uuid: boolean;
}

declare class Model<T extends Element = Element> extends BaseModel {
  static baseUrl: string;
  static uuid: boolean;

  static creating<M extends Model = Model>(model: M): void;

  $isNew(): boolean
}

export default Model;
