import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr } from "pinia-orm/decorators";
import type { FileData } from "@planetadeleste/pinia-orm-core";

class Brand extends Model {
  static entity = "sha_brands";
  static baseUrl = "brands";
  static namespace = "shopaholic";

  @Attr("") declare id: number | string;
  @Attr("") declare company_id: number | string;
  @Attr(true) declare active: boolean;
  @Attr(null) declare name: string;
  @Attr(null) declare slug: string;
  @Attr(null) declare code: string;
  @Attr(null) declare preview_text: string;
  @Attr(null) declare preview_image: string;
  @Attr(null) declare images: FileData[];
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at: string;
  @Attr(null) declare external_id: number;
  @Attr(null) declare description?: string;
  @Attr(0) declare sort_order?: string;
}

export default Brand;
