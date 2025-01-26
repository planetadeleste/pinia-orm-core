import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr, BelongsTo, OnDelete } from "pinia-orm/decorators";
import Order from "./Order";

class OrderPosition extends Model {
  static entity = "sha_order_position";
  static baseUrl = "orders/positions";
  static namespace = "orders";

  @Attr("") declare id: number | string;
  @Attr(null) declare order_id: number;
  @Attr(null) declare item_id: number | string;
  @Attr(null) declare item_type: string;
  @Attr(null) declare code: string;
  @Attr(null) declare height: number;
  @Attr(null) declare length: number;
  @Attr(null) declare weight: number;
  @Attr(null) declare width: number;
  @Attr(null) declare quantity: number;
  @Attr({}) declare property: Record<string, any>;
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at: string;

  @BelongsTo(() => Order, "order_id") @OnDelete("cascade") declare order: Order;

  @Attr(null) declare discount_total_price: number;
  @Attr(null) declare discount_total_price_per_unit: number;
  @Attr(null) declare discount_total_price_per_unit_value: number;
  @Attr(null) declare discount_total_price_per_unit_with_tax: number;
  @Attr(null) declare discount_total_price_per_unit_with_tax_value: number;
  @Attr(null) declare discount_total_price_per_unit_without_tax: number;
  @Attr(null) declare discount_total_price_per_unit_without_tax_value: number;
  @Attr(null) declare discount_total_price_value: number;
  @Attr(null) declare discount_total_price_with_tax: number;
  @Attr(null) declare discount_total_price_with_tax_value: number;
  @Attr(null) declare discount_total_price_without_tax: number;
  @Attr(null) declare discount_total_price_without_tax_value: number;

  @Attr(null) declare increase_total_price: number;
  @Attr(null) declare increase_total_price_per_unit: number;
  @Attr(null) declare increase_total_price_per_unit_value: number;
  @Attr(null) declare increase_total_price_per_unit_with_tax: number;
  @Attr(null) declare increase_total_price_per_unit_with_tax_value: number;
  @Attr(null) declare increase_total_price_per_unit_without_tax: number;
  @Attr(null) declare increase_total_price_per_unit_without_tax_value: number;
  @Attr(null) declare increase_total_price_value: number;
  @Attr(null) declare increase_total_price_with_tax: number;
  @Attr(null) declare increase_total_price_with_tax_value: number;
  @Attr(null) declare increase_total_price_without_tax: number;
  @Attr(null) declare increase_total_price_without_tax_value: number;

  @Attr(null) declare old_price: number;
  @Attr(null) declare old_price_value: number;
  @Attr(null) declare old_price_with_tax: number;
  @Attr(null) declare old_price_with_tax_value: number;
  @Attr(null) declare old_price_without_tax: number;
  @Attr(null) declare old_price_without_tax_value: number;

  @Attr(null) declare old_total_price: number;
  @Attr(null) declare old_total_price_per_unit: number;
  @Attr(null) declare old_total_price_per_unit_value: number;
  @Attr(null) declare old_total_price_per_unit_with_tax: number;
  @Attr(null) declare old_total_price_per_unit_with_tax_value: number;
  @Attr(null) declare old_total_price_per_unit_without_tax: number;
  @Attr(null) declare old_total_price_per_unit_without_tax_value: number;
  @Attr(null) declare old_total_price_value: number;
  @Attr(null) declare old_total_price_with_tax: number;
  @Attr(null) declare old_total_price_with_tax_value: number;
  @Attr(null) declare old_total_price_without_tax: number;
  @Attr(null) declare old_total_price_without_tax_value: number;

  @Attr(null) declare price: number | string;
  @Attr(null) declare price_value: number;
  @Attr(null) declare price_with_tax: number;
  @Attr(null) declare price_with_tax_value: number;
  @Attr(null) declare price_without_tax: number;
  @Attr(null) declare price_without_tax_value: number;

  @Attr(null) declare tax_discount_total_price: number;
  @Attr(null) declare tax_discount_total_price_per_unit: number;
  @Attr(null) declare tax_discount_total_price_per_unit_value: number;
  @Attr(null) declare tax_discount_total_price_value: number;
  @Attr(null) declare tax_increase_total_price: number;
  @Attr(null) declare tax_increase_total_price_per_unit: number;
  @Attr(null) declare tax_increase_total_price_per_unit_value: number;
  @Attr(null) declare tax_increase_total_price_value: number;
  @Attr(null) declare tax_old_price: number;
  @Attr(null) declare tax_old_price_value: number;
  @Attr(null) declare tax_old_total_price: number;
  @Attr(null) declare tax_old_total_price_per_unit: number;
  @Attr(null) declare tax_old_total_price_per_unit_value: number;
  @Attr(null) declare tax_old_total_price_value: number;
  @Attr(null) declare tax_percent: number;
  @Attr(null) declare tax_price: number;
  @Attr(null) declare tax_price_value: number;
  @Attr(null) declare tax_total_price: number;
  @Attr(null) declare tax_total_price_per_unit: number;
  @Attr(null) declare tax_total_price_per_unit_value: number;
  @Attr(null) declare tax_total_price_value: number;

  @Attr(null) declare total_price: number;
  @Attr(null) declare total_price_per_unit: number;
  @Attr(null) declare total_price_per_unit_value: number;
  @Attr(null) declare total_price_per_unit_with_tax: number;
  @Attr(null) declare total_price_per_unit_with_tax_value: number;
  @Attr(null) declare total_price_per_unit_without_tax: number;
  @Attr(null) declare total_price_per_unit_without_tax_value: number;
  @Attr(null) declare total_price_value: number;
  @Attr(null) declare total_price_with_tax: number;
  @Attr(null) declare total_price_with_tax_value: number;
  @Attr(null) declare total_price_without_tax: number;
  @Attr(null) declare total_price_without_tax_value: number;
}

export default OrderPosition;
