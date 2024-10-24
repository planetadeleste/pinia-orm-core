import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr } from "pinia-orm/decorators";

class PaymentMethod extends Model {
  static entity = "sha_paymentmethods";
  static baseUrl = "paymentmethods";
  static namespace = "orders";

  @Attr("") declare id: number | string;
  @Attr(null) declare name: string;
  @Attr(null) declare code: string;
  @Attr(null) declare preview_text: string;
  @Attr(null) declare restriction: string;
}

export default PaymentMethod;
