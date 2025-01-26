import type { FileData } from "@planetadeleste/pinia-orm-core";
import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr, BelongsTo, Bool, HasMany, OnDelete } from "pinia-orm/decorators";
import Brand from "./Brand";
import Category from "./Category";
import Offer from "./Offer";

class Product extends Model {
  static entity = "sha_products";
  static baseUrl = "products";
  static namespace = "shopaholic";

  @Attr("") declare id: number | string;
  @Attr(null) declare category_id: number;
  @Attr(null) declare brand_id: number;
  @Attr(null) declare slug: string;
  @Attr(null) declare name: string;
  @Attr(null) declare category_name: string;
  @Attr(null) declare images: FileData[];
  @Attr(null) declare preview_image: string;
  @Attr(null) declare preview_text: string;
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at: string;
  @Bool(true) declare active: boolean;
  @Attr(null) declare external_id: string;
  @Attr(null) declare description: string;
  @Attr(null) declare secondary_thumb: string;
  @Attr(null) declare thumbnail: string;
  @Attr(null) declare code: string;

  @BelongsTo(() => Brand, "brand_id") declare brand: Brand;
  @BelongsTo(() => Category, "category_id") declare category: Category;
  @HasMany(() => Offer, "product_id")
  @OnDelete("cascade")
  declare offers: Offer[];
}

export default Product;
