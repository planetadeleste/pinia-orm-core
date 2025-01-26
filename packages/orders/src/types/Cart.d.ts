import type { Offer, Product } from "@planetadeleste/pinia-orm-shopaholic";
import type { AxiosRepository, Request } from "@pinia-orm/axios";
import type { AxiosResponse } from "axios";
import type { Result } from "@planetadeleste/pinia-orm-core";
import type { Cart } from "../index";

export interface TotalPriceContainerData {
  price: string;
  price_value: number;
  tax_price: string;
  tax_price_value: number;
  price_without_tax: string;
  price_without_tax_value: number;
  price_with_tax: string;
  price_with_tax_value: number;

  old_price: string;
  old_price_value: number;
  tax_old_price: string;
  tax_old_price_value: number;
  old_price_without_tax: string;
  old_price_without_tax_value: number;
  old_price_with_tax: string;
  old_price_with_tax_value: number;

  discount_price: string;
  discount_price_value: number;
  tax_discount_price: string;
  tax_discount_price_value: number;
  discount_price_without_tax: string;
  discount_price_without_tax_value: number;
  discount_price_with_tax: string;
  discount_price_with_tax_value: number;

  increase_price: string;
  increase_price_value: number;
  tax_increase_price: string;
  tax_increase_price_value: number;
  increase_price_without_tax: string;
  increase_price_without_tax_value: number;
  increase_price_with_tax: string;
  increase_price_with_tax_value: number;
}

export interface ItemPriceData extends TotalPriceContainerData {
  price_per_unit: string;
  price_per_unit_value: number;
  tax_price_per_unit: string;
  tax_price_per_unit_value: number;
  price_per_unit_without_tax: string;
  price_per_unit_without_tax_value: number;
  price_per_unit_with_tax: string;
  price_per_unit_with_tax_value: number;

  old_price_per_unit: string;
  old_price_per_unit_value: number;
  tax_old_price_per_unit: string;
  tax_old_price_per_unit_value: number;
  old_price_per_unit_without_tax: string;
  old_price_per_unit_without_tax_value: number;
  old_price_per_unit_with_tax: string;
  old_price_per_unit_with_tax_value: number;

  discount_price_per_unit: string;
  discount_price_per_unit_value: number;
  tax_discount_price_per_unit: string;
  tax_discount_price_per_unit_value: number;
  discount_price_per_unit_without_tax: string;
  discount_price_per_unit_without_tax_value: number;
  discount_price_per_unit_with_tax: string;
  discount_price_per_unit_with_tax_value: number;

  increase_price_per_unit: string;
  increase_price_per_unit_value: number;
  tax_increase_price_per_unit: string;
  tax_increase_price_per_unit_value: number;
  increase_price_per_unit_without_tax: string;
  increase_price_per_unit_without_tax_value: number;
  increase_price_per_unit_with_tax: string;
  increase_price_per_unit_with_tax_value: number;
}

export interface CartPositionData {
  id: number | string;
  item_id: number;
  item_type: string;
  quantity: number;
  max_quantity: number;
  weight: number;
  property: Record<string, any>;
}

export interface CartComponentPositionData {
  id: number;
  offer: Offer;
  product: Product;
  price: string;
  currency: string;
  total: string;
  total_value: number;
  quantity: number;
  price_per_unit: string;
  price_per_unit_value: number;
  property: Record<string, any>;
}

export interface CartComponentAddItemData {
  id?: number;
  offer_id: number;
  quantity: number;
  property?: Record<string, any>;
}

export interface CartComponentAddData {
  cart: CartComponentAddItemData[] | number[];
  shipping_type_id?: number;
  payment_method_id?: number;
  return_data?: boolean;
}

export type CartRemoveType = "offer" | "position";

export interface CartComponentRemoveData extends CartComponentAddData {
  cart: number[];
  type?: CartRemoveType;
}

export interface CartComponentItemsData {
  positions: CartComponentPositionData[];
  currency: string;
  total: string;
  total_value: number;
}

export interface CartAxiosRepository extends Request {
  /**
   * Add offers to cart
   * @param {CartComponentAddData} obData
   * @param {boolean} [bReturnData = false]
   */
  add(
    obData: CartComponentAddData,
  ): Promise<AxiosResponse<Result<CartComponentItemsData>>>;

  add(
    obData: CartComponentAddData,
    bReturnData: true,
  ): Promise<AxiosResponse<Result<Cart>>>;

  /**
   * Get cart data
   */
  getData(): Promise<AxiosResponse<Result<Cart>>>;

  /**
   * Get cart items
   */
  getItems(): Promise<AxiosResponse<Result<CartComponentItemsData>>>;

  /**
   * Removes positions from cart by offer ID or cart position ID
   * @param {CartComponentAddData} obData
   * @param {boolean} [bReturnData = false]
   */
  remove(
    obData: CartComponentRemoveData,
  ): Promise<AxiosResponse<Result<CartComponentItemsData>>>;

  remove(
    obData: CartComponentRemoveData,
    bReturnData: true,
  ): Promise<AxiosResponse<Result<Cart>>>;

  /**
   * Updates quantity of offers in cart
   * @param {CartComponentAddData} obData
   * @param {boolean} [bReturnData = false]
   */
  update(
    obData: CartComponentAddData,
  ): Promise<AxiosResponse<Result<CartComponentItemsData>>>;

  update(
    obData: CartComponentAddData,
    bReturnData: true,
  ): Promise<AxiosResponse<Result<Cart>>>;
}

// @ts-ignore
export interface CartApiAxiosRepository extends AxiosRepository<Cart> {
  api(): CartAxiosRepository;
}
