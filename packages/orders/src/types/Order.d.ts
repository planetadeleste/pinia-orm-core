import type { AxiosRepository, Request } from "@pinia-orm/axios";
import type { AxiosResponse } from "axios";
import type { Result } from "@planetadeleste/pinia-orm-core";
import type { Address } from "@planetadeleste/pinia-orm-auth";
import type { Order } from "../index";

export interface OrderRequestOrderData {
  payment_method_id?: number;
  shipping_type_id?: number;
  shipping_price?: number;
  property?: Record<string, any>;
}

export interface OrderRequestUserData {
  email: string;
  name: string;

  [key: string]: any;
}

export interface OrderRequestData {
  order: OrderRequestOrderData;
  user: OrderRequestUserData;
  shipping_address?: Address;
  billing_address?: Address;
}

export interface MakeOrderResponseData {
  id: number | string;
  number: string;
  key: string;
}

export interface OrderAxiosRepository extends Request {
  makeOrder(
    obData: OrderRequestData,
  ): Promise<AxiosResponse<Result<MakeOrderResponseData>>>;
}

export interface OrderApiAxiosRepository extends AxiosRepository<Order> {
  api(): OrderAxiosRepository;
}
