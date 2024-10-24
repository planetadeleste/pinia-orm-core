import { Model } from "@planetadeleste/pinia-orm-core";

class Brand extends Model {
  static entity = "sha_brands";
  static baseUrl = "brands";
  static namespace = "shopaholic";

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      company_id: this.attr(""),
      active: this.boolean(true),
      name: this.attr(null),
      slug: this.attr(null),
      code: this.attr(null),
      preview_text: this.attr(null),
      preview_image: this.attr(null),
      images: this.attr([]),
      created_at: this.attr(null),
      updated_at: this.attr(null),
      external_id: this.attr(null),
      description: this.attr(null),
      sort_order: this.attr(0),
    };
  }
}

export default Brand;
