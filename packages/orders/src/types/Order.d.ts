import type { AddressData, UserData } from "@planetadeleste/pinia-orm-auth";
import type { CurrencyData } from "@planetadeleste/pinia-orm-shopaholic";
import type { StatusData } from "./Status";
import type { OrderPositionData } from "./OrderPosition";
import type { ShippingTypeData } from "./ShippingType";

export interface OrderData {
  id: number | string;
  currency_id: number;
  status_id: number;
  transaction_id: number;
  user_id: number;
  payment_method_id: number;
  shipping_type_id: number;
  order_position_id: number[];
  order_promo_mechanism_id: number[];

  created_at?: string;
  updated_at?: string;
  order_number: string;
  property: Record<string, any>;
  secret_key: string;
  status: StatusData;
  weight: number;
  order_position?: OrderPositionData[];
  currency: CurrencyData;
  user: UserData;

  discount_position_total_price?: string;
  discount_position_total_price_value?: number;
  discount_shipping_price?: string;
  discount_shipping_price_value?: number;
  discount_total_price?: string;
  discount_total_price_value?: number;

  old_position_total_price?: string;
  old_position_total_price_value?: number;
  old_shipping_price?: string;
  old_shipping_price_value?: number;
  old_total_price?: string;
  old_total_price_value?: number;

  payment_data: Record<string, any>;
  payment_method?: PaymentMethodData;
  payment_response?: number;
  payment_token?: string;

  position_total_price: string;
  position_total_price_value: number;

  total_price: string;
  total_price_value: number;

  shipping_price?: string;
  shipping_price_value?: number;
  shipping_tax_percent?: number;
  shipping_type?: ShippingTypeData;
}

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
  shipping_address: AddressData;
  billing_address: AddressData;
}

export interface MakeOrderResponseData {
  id: number | string;
  number: string;
  key: string;
}
