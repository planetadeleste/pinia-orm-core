import { Model } from "@planetadeleste/pinia-orm-core";
import type { ModelFields } from "pinia-orm";
import { Currency } from "@planetadeleste/pinia-orm-shopaholic";
import Status from "./Status";
import OrderPosition from "./OrderPosition";
import ShippingType from "./ShippingType";
import PaymentMethod from "./PaymentMethod";

class Order extends Model {
  static entity = "sha_order";
  static baseUrl = "orders";
  static namespace = "orders";

  static fields(): ModelFields {
    return {
      id: this.attr(""),
      currency_id: this.attr(null),
      status_id: this.attr(null),
      transaction_id: this.attr(null),
      user_id: this.attr(null),
      payment_method_id: this.attr(null),
      shipping_type_id: this.attr(null),
      order_position_id: this.attr(null),
      order_promo_mechanism_id: this.attr(null),

      created_at: this.attr(null),
      updated_at: this.attr(null),
      order_number: this.attr(null),
      property: this.attr({}),
      secret_key: this.attr(null),
      weight: this.attr(null),

      status: this.belongsTo(Status, "status_id"),
      order_position: this.hasMany(OrderPosition, "order_id"),
      currency: this.belongsTo(Currency, "currency_id"),
      payment_method: this.belongsTo(PaymentMethod, "payment_method_id"),
      shipping_type: this.belongsTo(ShippingType, "shipping_type_id"),
    };
  }
}

export default Order;
