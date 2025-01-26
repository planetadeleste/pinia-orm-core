import type { AxiosRepository, Request } from "@pinia-orm/axios";
import type { Result } from "@planetadeleste/pinia-orm-core";
import type { AxiosResponse } from "axios";
import type Category from "../models/Category";

export interface CategoryAxiosRepository extends Request {
  list(): Promise<AxiosResponse<Result<Category[]>>>;
  tree(): Promise<AxiosResponse<Result<Category[]>>>;
}

export interface CategoryApiAxiosRepository extends AxiosRepository<Category> {
  api(): CategoryAxiosRepository;
}
