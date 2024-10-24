import { Model } from "@planetadeleste/pinia-orm-core";

class Currency extends Model {
  static entity = "sha_currencies";
  static baseUrl = "currencies";
  static namespace = "shopaholic";

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      external_id: this.attr(null),
      name: this.attr(null),
      active: this.boolean(true),
      is_default: this.boolean(false),
      code: this.attr(null),
      rate: this.attr(null),
      symbol: this.attr(null),
      created_at: this.attr(null),
      updated_at: this.attr(null),
    };
  }
}

export default Currency;
