import Model from "@planetadeleste/pinia-orm-core";

import type { ModelFields } from "pinia-orm";
import type { ProductData } from "../types";
import Brand                from "./Brand";
import Category             from "./Category";
import Offer                from "./Offer";

class Product extends Model<ProductData> {
  static entity = "sha_products";
  static baseUrl = "products";
  static namespace = "shopaholic";

  static fields(): ModelFields {
    return {
      id: this.attr(""),
      active: this.boolean(true),
      brand: this.belongsTo(Brand, "brand_id"),
      brand_id: this.attr(null),
      category: this.belongsTo(Category, "category_id"),
      category_id: this.attr(null),
      category_name: this.attr(null),
      code: this.attr(null),
      created_at: this.attr(null),
      description: this.attr(null),
      external_id: this.attr(null),
      images: this.attr(null),
      name: this.attr(null),
      preview_image: this.attr(null),
      preview_text: this.attr(null),
      secondary_thumb: this.attr(null),
      slug: this.attr(null),
      thumbnail: this.attr(null),
      updated_at: this.attr(null),
      offers: this.hasMany(Offer, "product_id").onDelete("cascade")
    };
  }
}

export default Product;
