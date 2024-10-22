import { Model } from "@planetadeleste/pinia-orm-core";
import State from "./State";

class Country extends Model {
  static entity = "sha_countries";
  static baseUrl = "countries";
  static namespace = "location";

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      name: this.attr(null),
      code: this.attr(null),
      is_pinned: this.boolean(false),
      is_enabled: this.boolean(true),
      is_default: this.boolean(false),
      created_at: this.attr(null),
      updated_at: this.attr(null),

      states: this.hasMany(State, "country_id"),
    };
  }
}

export default Country;
