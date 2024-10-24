import { Model } from "@planetadeleste/pinia-orm-core";
import { Attr } from "pinia-orm/decorators";

class Currency extends Model {
  static entity = "sha_currencies";
  static baseUrl = "currencies";
  static namespace = "shopaholic";

  @Attr(null) declare id: number | string;
  @Attr(null) declare external_id: number | string;
  @Attr(null) declare name: string;
  @Attr(true) declare active: boolean;
  @Attr(true) declare is_default: boolean;
  @Attr(null) declare code: string;
  @Attr(null) declare rate: string | number;
  @Attr(null) declare symbol: string;
  @Attr(null) declare created_at?: string;
  @Attr(null) declare updated_at?: string;
}

export default Currency;
