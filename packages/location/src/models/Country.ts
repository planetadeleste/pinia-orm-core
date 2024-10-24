import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr, Bool, HasMany } from "pinia-orm/decorators";
import State from "./State";

class Country extends Model {
  static entity = "sha_countries";
  static baseUrl = "countries";
  static namespace = "location";

  @Attr("") declare id: number | string;
  @Attr(null) declare name: string;
  @Attr(null) declare code: string;
  @Bool(null) declare is_pinned: boolean;
  @Bool(null) declare is_enabled: boolean;
  @Bool(null) declare is_default: boolean;
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at: string;

  @HasMany(() => State, "country_id") declare states: State[];
}

export default Country;
