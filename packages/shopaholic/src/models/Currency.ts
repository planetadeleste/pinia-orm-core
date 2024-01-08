import Model from "@planetadeleste/pinia-orm-core";

import type { ModelFields }  from "pinia-orm";
import type { CurrencyData } from "../types";

class Currency extends Model<CurrencyData> {
  static entity = "sha_currencies";
  static baseUrl = "currencies";
  static namespace = "shopaholic";

  static fields(): ModelFields {
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
      updated_at: this.attr(null)
    };
  }
}

export default Currency;
