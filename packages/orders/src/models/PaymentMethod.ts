import { Model } from "@planetadeleste/pinia-orm-core";

class PaymentMethod extends Model {
  static entity = "sha_paymentmethods";
  static baseUrl = "paymentmethods";
  static namespace = "orders";

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      name: this.attr(null),
      code: this.attr(null),
      preview_text: this.attr(null),
      restriction: this.attr(null),
    };
  }
}

export default PaymentMethod;
