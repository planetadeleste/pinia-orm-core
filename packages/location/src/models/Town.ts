import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr, BelongsTo, Bool } from "pinia-orm/decorators";
import State from "./State";

class Town extends Model {
  static entity = "sha_towns";
  static baseUrl = "towns";
  static namespace = "location";

  @Attr("") declare id: number | string;
  @Attr(null) declare state_id: number;
  @Attr(null) declare name: string;
  @Attr(null) declare slug: string;
  @Attr(null) declare description: string;
  @Bool(true) declare is_enabled: boolean;
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at: string;

  @BelongsTo(() => State, "state_id") declare state: State;
}

export default Town;
