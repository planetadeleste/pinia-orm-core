import type { Element, ModelOptions } from "pinia-orm";
import { Model as BaseModel } from "pinia-orm";

interface Model<T extends Element = Element> extends BaseModel {
  $getOriginal: () => T;
  $getAttributes: () => T;
  $toJson: (model?: BaseModel, options?: ModelOptions) => T;

  id: string | number;
  created_at?: string;
  updated_at?: string;

  uuid: boolean;
  baseUrl: string;
}

declare class Model extends BaseModel {
  static baseUrl: string;
  static uuid: boolean;

  static creating<M extends Model = Model>(model: M): void;

  $isNew(): boolean;

  $baseUrl(): string;
}

export type {
  ApiLinksResponse,
  ApiMetaResponse,
  Result,
  ResultData,
  Response,
  FileData,
  OrmBeforeSaveEvent,
  Config,
  Constructor,
  fnUseOrmModel,
  useOrmModel,
} from "./types";
export { Model };
