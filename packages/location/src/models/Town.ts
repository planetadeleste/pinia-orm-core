import { Model } from "@planetadeleste/pinia-orm-core";
import State from "./State";

class Town extends Model {
  static entity = "sha_towns";
  static baseUrl = "towns";
  static namespace = "location";

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      state_id: this.attr(""),
      name: this.attr(null),
      slug: this.attr(null),
      description: this.attr(null),
      is_enabled: this.boolean(true),
      created_at: this.attr(null),
      updated_at: this.attr(null),
      state: this.belongsTo(State, "state_id"),
    };
  }
}

export default Town;
