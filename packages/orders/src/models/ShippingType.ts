import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr } from "pinia-orm/decorators";

class ShippingType extends Model {
  static entity = "sha_shipping_type";
  static baseUrl = "shippingtypes";
  static namespace = "orders";

  @Attr("") declare id: number | string;
  @Attr(null) declare name: string;
  @Attr(null) declare code: string;
  @Attr(null) declare price_value: string;
  @Attr(null) declare preview_text: string;
  @Attr(null) declare property: Record<string, any>;
  @Attr(null) declare api_class: string;
  @Attr(null) declare created_at?: string;
  @Attr(null) declare updated_at?: string;
}

export default ShippingType;
