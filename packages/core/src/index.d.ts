import type { Element, ModelOptions } from "pinia-orm";
import { Model as BaseModel } from "pinia-orm";
import type { AxiosResponse } from "axios";

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

export type ResultData<T> = Result<T> & Record<string, any>;

export class Response<T = any> {
  response?: AxiosResponse;

  constructor(response?: AxiosResponse);

  getData(): ResultData<T>;

  getStatus(): number;

  getHeaders(): any;

  getValidationErrors(): Record<string, any> | null;
}

export interface FileData {
  disk_name: string;
  thumb: string;
  path: string;
  file_name: string;
  ext: string;
  title: string;
  description: string;
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

export declare class Model extends BaseModel {
  static baseUrl: string;
  static uuid: boolean;

  static creating<M extends Model = Model>(model: M): void;

  $isNew(): boolean;
}
