import { Model } from '@planetadeleste/pinia-orm-core';
import { Attr, BelongsTo } from 'pinia-orm/decorators';
import User from './User';

class Address extends Model {
  static entity = 'sha_address';
  static baseUrl = 'address';
  static namespace = 'auth';

  @Attr('') declare id: number | string;
  @Attr(null) declare user_id: number;
  @Attr(null) declare type: string;
  @Attr(null) declare country: string | number;
  @Attr(null) declare state: string | number;
  @Attr(null) declare city: string | number;
  @Attr(null) declare country_text: string;
  @Attr(null) declare state_text: string;
  @Attr(null) declare city_text: string;
  @Attr(null) declare street: string;
  @Attr(null) declare house: string | number;
  @Attr(null) declare building: string;
  @Attr(null) declare flat: string | number;
  @Attr(null) declare floor: string | number;
  @Attr(null) declare address1: string;
  @Attr(null) declare address2: string;
  @Attr(null) declare postcode: string;

  @BelongsTo(() => User, 'user_id') declare user: User;
}

export default Address;
