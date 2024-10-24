import { Model } from "@planetadeleste/pinia-orm-core";
import type { FileData } from "@planetadeleste/pinia-orm-core";
import { Attr, BelongsTo, Bool, Num } from "pinia-orm/decorators";
import Product from "./Product";

class Offer extends Model {
  static entity = "sha_offers";
  static baseUrl = "offers";
  static namespace = "shopaholic";

  @Attr("") declare id: number | string;
  @Attr(null) declare product_id: number;
  @Attr(null) declare name: string;
  @Attr(null) declare item_type: string;
  @Attr(null) declare item_id: string;
  @Attr(null) declare code: string;
  @Attr(null) declare price: string | number;
  @Num(0) declare price_value: number;
  @Attr(null) declare old_price: string;
  @Num(0) declare old_price_value: number;
  @Num(0) declare quantity: number;
  @Attr(null) declare currency: string;
  @Attr(null) declare preview_text: string;
  @Attr(null) declare thumbnail: string;
  @Attr(null) declare text: string;
  @Num(0) declare value: number;
  @Bool(null) declare active: boolean;
  @Attr(null) declare description: string;
  @Attr(null) declare preview_image: string;
  @Attr(null) declare images: FileData[];
  @Attr({}) declare property: Record<string, any>;

  @BelongsTo(() => Product, "product_id") declare product: Product;
}

export default Offer;
