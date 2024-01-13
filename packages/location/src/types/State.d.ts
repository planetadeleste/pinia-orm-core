import type { CountryData } from "./Country";
import type { TownData } from "./Town";

export interface StateData {
  id: number | string;
  country_id: number;
  name: string;
  code: string;
  is_default: boolean;
  country: CountryData;
  towns: TownData[];
}
