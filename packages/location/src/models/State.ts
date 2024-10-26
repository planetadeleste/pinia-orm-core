import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr, Bool, BelongsTo, HasMany } from "pinia-orm/decorators";
import Country from "./Country";
import Town from "./Town";

class State extends Model {
  static entity = "sha_states";
  static baseUrl = "states";
  static namespace = "location";

  @Attr("") declare id: number | string;
  @Attr(null) declare country_id: number;
  @Attr(null) declare name: string;
  @Attr(null) declare code: string;
  @Bool(false) declare is_default: boolean;
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at: string;

  @BelongsTo(() => Country, "country_id") declare country: Country;
  @HasMany(() => Town, "state_id") declare towns: Town[];
}

export default State;
