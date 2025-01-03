import type { OfferData } from "@planetadeleste/pinia-orm-shopaholic";
import type { OrderData } from "./Order";

export interface OrderPositionData {
  id: number | string;
  order_id: number;
  item_id: number | string;
  item_type: string;
  code: string;
  height: number;
  length: number;
  weight: number;
  width: number;
  quantity: number;
  property: Record<string, any>;
  created_at?: string;
  updated_at?: string;

  currency_code: string;
  currency_symbol: string;
  offer_id: number;
  offer: OfferData;
  order: OrderData;

  discount_total_price: number;
  discount_total_price_per_unit: number;
  discount_total_price_per_unit_value: number;
  discount_total_price_per_unit_with_tax: number;
  discount_total_price_per_unit_with_tax_value: number;
  discount_total_price_per_unit_without_tax: number;
  discount_total_price_per_unit_without_tax_value: number;
  discount_total_price_value: number;
  discount_total_price_with_tax: number;
  discount_total_price_with_tax_value: number;
  discount_total_price_without_tax: number;
  discount_total_price_without_tax_value: number;

  increase_total_price: number;
  increase_total_price_per_unit: number;
  increase_total_price_per_unit_value: number;
  increase_total_price_per_unit_with_tax: number;
  increase_total_price_per_unit_with_tax_value: number;
  increase_total_price_per_unit_without_tax: number;
  increase_total_price_per_unit_without_tax_value: number;
  increase_total_price_value: number;
  increase_total_price_with_tax: number;
  increase_total_price_with_tax_value: number;
  increase_total_price_without_tax: number;
  increase_total_price_without_tax_value: number;

  old_price: number;
  old_price_value: number;
  old_price_with_tax: number;
  old_price_with_tax_value: number;
  old_price_without_tax: number;
  old_price_without_tax_value: number;
  old_total_price: number;
  old_total_price_per_unit: number;
  old_total_price_per_unit_value: number;
  old_total_price_per_unit_with_tax: number;
  old_total_price_per_unit_with_tax_value: number;
  old_total_price_per_unit_without_tax: number;
  old_total_price_per_unit_without_tax_value: number;
  old_total_price_value: number;
  old_total_price_with_tax: number;
  old_total_price_with_tax_value: number;
  old_total_price_without_tax: number;
  old_total_price_without_tax_value: number;

  price: number;
  price_value: number;
  price_with_tax: number;
  price_with_tax_value: number;
  price_without_tax: number;
  price_without_tax_value: number;

  tax_discount_total_price: number;
  tax_discount_total_price_per_unit: number;
  tax_discount_total_price_per_unit_value: number;
  tax_discount_total_price_value: number;
  tax_increase_total_price: number;
  tax_increase_total_price_per_unit: number;
  tax_increase_total_price_per_unit_value: number;
  tax_increase_total_price_value: number;
  tax_old_price: number;
  tax_old_price_value: number;
  tax_old_total_price: number;
  tax_old_total_price_per_unit: number;
  tax_old_total_price_per_unit_value: number;
  tax_old_total_price_value: number;
  tax_percent: number;
  tax_price: number;
  tax_price_value: number;
  tax_total_price: number;
  tax_total_price_per_unit: number;
  tax_total_price_per_unit_value: number;
  tax_total_price_value: number;

  total_price: number;
  total_price_per_unit: number;
  total_price_per_unit_value: number;
  total_price_per_unit_with_tax: number;
  total_price_per_unit_with_tax_value: number;
  total_price_per_unit_without_tax: number;
  total_price_per_unit_without_tax_value: number;
  total_price_value: number;
  total_price_with_tax: number;
  total_price_with_tax_value: number;
  total_price_without_tax: number;
  total_price_without_tax_value: number;
}
