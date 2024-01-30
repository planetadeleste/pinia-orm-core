import { Model } from "@planetadeleste/pinia-orm-core";
import type { ModelFields } from "pinia-orm";

class OrderPosition extends Model {
  static entity = "sha_order_position";
  static baseUrl = "positions";
  static namespace = "orders";

  static fields(): ModelFields {
    return {
      id: this.attr(""),
      order_id: this.attr(null),
      code: this.attr(null),
      currency_code: this.attr(null),
      currency_symbol: this.attr(null),
      height: this.attr(null),
      length: this.attr(null),
      weight: this.attr(null),
      width: this.attr(null),
      quantity: this.attr(null),
      offer: this.attr(null),
      price: this.attr(null),
    };
  }
}

export default OrderPosition;
