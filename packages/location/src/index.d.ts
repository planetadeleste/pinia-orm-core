import { Model } from "@planetadeleste/pinia-orm-core";
import type { TownData, StateData, CountryData } from "./types";

// TOWN
interface Town extends TownData {}
declare class Town extends Model<TownData> {}

// STATE
interface State extends StateData {}
declare class State extends Model<StateData> {}

// COUNTRY
interface Country extends CountryData {}
declare class Country extends Model<CountryData> {}

export { Town, State, Country };
export type { TownData, StateData, CountryData } from "./types";
