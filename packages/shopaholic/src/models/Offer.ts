import { Model } from "@planetadeleste/pinia-orm-core";
import Product from "./Product";

class Offer extends Model {
  static entity = "sha_offers";
  static baseUrl = "offers";
  static namespace = "shopaholic";

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      product_id: this.number(0),
      name: this.string(null),
      item_type: this.string(null),
      item_id: this.string(null),
      code: this.string(null),
      price: this.string(null),
      price_value: this.number(0),
      old_price: this.string(null),
      old_price_value: this.number(0),
      quantity: this.number(0),
      currency: this.string(null),
      preview_text: this.string(null),
      thumbnail: this.string(null),
      text: this.string(null),
      value: this.number(0),
      active: this.boolean(true),
      description: this.string(null),
      preview_image: this.string(null),
      images: this.attr(null),
      property: this.attr({}),
      product: this.belongsTo(Product, "product_id"),
    };
  }
}

export default Offer;
