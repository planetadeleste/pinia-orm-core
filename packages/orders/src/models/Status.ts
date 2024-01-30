import { Model } from "@planetadeleste/pinia-orm-core";
import type { ModelFields } from "pinia-orm";

class Status extends Model {
  static entity = "sha_status";
  static baseUrl = "status";
  static namespace = "orders";

  static fields(): ModelFields {
    return {
      id: this.attr(""),
      name: this.attr(null),
      name_for_user: this.attr(null),
      code: this.attr(null),
      preview_text: this.attr(null),
      is_user_show: this.attr(null),
      user_status_id: this.attr(null),
      color: this.attr(null),
    };
  }
}

export default Status;
