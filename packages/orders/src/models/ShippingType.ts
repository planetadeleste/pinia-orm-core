import { Model } from "@planetadeleste/pinia-orm-core";
import type { ModelFields } from "pinia-orm";

class ShippingType extends Model {
  static entity = "sha_shipping_type";
  static baseUrl = "shippingtypes";
  static namespace = "orders";

  static fields(): ModelFields {
    return {
      id: this.attr(""),
      name: this.attr(null),
      code: this.attr(null),
      price_value: this.attr(null),
      preview_text: this.attr(null),
      property: this.attr(null),
      api_class: this.attr(null),
      created_at: this.attr(null),
      updated_at: this.attr(null),
    };
  }
}

export default ShippingType;
