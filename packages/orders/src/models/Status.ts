import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr } from "pinia-orm/decorators";

class Status extends Model {
  static entity = "sha_status";
  static baseUrl = "orders/status";
  static namespace = "orders";

  @Attr("") declare id: number | string;
  @Attr(null) declare name: string;
  @Attr(null) declare name_for_user: string;
  @Attr(null) declare code: string;
  @Attr(null) declare preview_text: string;
  @Attr(null) declare is_user_show: string;
  @Attr(null) declare user_status_id: string;
  @Attr(null) declare color: string;
}

export default Status;
