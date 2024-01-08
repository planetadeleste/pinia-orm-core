import type { AddressData } from "./Address";

export interface ProfileData {
  id: number;
  groups: string[];
  email: string;
  name: string;
  last_name: string;
  middle_name: string;
  phone: string;
  phone_list: string[];
  avatar: string;
  property: Record<string, any>;
  address: AddressData[];
  role: string;
  created_at?: string;
  updated_at?: string;
}
