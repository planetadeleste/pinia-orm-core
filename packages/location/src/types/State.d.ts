import type { CountryData } from "./Country";

export interface StateData {
  id: number | string;
  country_id: number;
  name: string;
  code: string;
  is_default: boolean;
  country: CountryData;
}
