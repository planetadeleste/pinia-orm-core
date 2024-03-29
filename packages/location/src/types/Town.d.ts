import type { StateData } from "./State";

export interface TownData {
  id: number | string;
  state_id: number;
  name: string;
  slug: string;
  description: string;
  is_enabled: boolean;
  state: StateData;
}
