import { Model } from "@planetadeleste/pinia-orm-core";
import type { ModelFields } from "pinia-orm";
import Order from "./Order";

class OrderPosition extends Model {
  static entity = "sha_order_position";
  static baseUrl = "orders/positions";
  static namespace = "orders";

  static fields(): ModelFields {
    return {
      id: this.attr(""),
      order_id: this.attr(null),
      item_id: this.attr(null),
      item_type: this.attr(null),
      code: this.attr(null),
      height: this.attr(null),
      length: this.attr(null),
      weight: this.attr(null),
      width: this.attr(null),
      quantity: this.attr(null),
      price: this.attr(null),
      property: this.attr({}),

      order: this.belongsTo(Order, "order_id"),
    };
  }
}

export default OrderPosition;
