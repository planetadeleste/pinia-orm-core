import { Model } from "@planetadeleste/pinia-orm-core";
import Country from "./Country";
import Town from "./Town";

class State extends Model {
  static entity = "sha_states";
  static baseUrl = "states";
  static namespace = "location";

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      country_id: this.attr(""),
      name: this.attr(null),
      code: this.attr(null),
      is_default: this.boolean(false),
      created_at: this.attr(null),
      updated_at: this.attr(null),
      country: this.belongsTo(Country, "country_id"),
      towns: this.hasMany(Town, "state_id"),
    };
  }
}

export default State;
