import Model from "@planetadeleste/pinia-orm-core";
import type { ModelFields } from "pinia-orm";
import type { StateData } from "../types";
import Country from "./Country";

class State extends Model<StateData> {
  static entity = "sha_states";
  static baseUrl = "states";
  static namespace = "location";

  static fields(): ModelFields {
    return {
      id: this.attr(""),
      country_id: this.attr(""),
      name: this.attr(null),
      code: this.attr(null),
      is_default: this.boolean(false),
      created_at: this.attr(null),
      updated_at: this.attr(null),
      country: this.belongsTo(Country, "country_id"),
    };
  }
}

export default State;
