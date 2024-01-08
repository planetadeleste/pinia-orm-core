import type User from "../models/User";

export interface AddressData {
  id: number | string;
  user_id: number;
  type: string;
  country: string | number;
  state: string | number;
  city: string | number;
  country_text: string;
  state_text: string;
  city_text: string;
  street: string;
  house: string | number;
  building: string;
  flat: string | number;
  floor: string | number;
  address1: string;
  address2: string;
  postcode: string;
  user: User;
}

export interface AddressUpdateResponse {
  id: number;
}
