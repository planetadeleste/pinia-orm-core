import { Model } from '@planetadeleste/pinia-orm-core';
import { Attr, Bool, HasMany } from 'pinia-orm/decorators';
import Address from './Address';

class User extends Model {
  static entity = 'sha_users';
  static baseUrl = 'users';
  static namespace = 'auth';

  @Attr('') declare id: number | string;
  @Attr(null) declare groups: string[];
  @Attr(null) declare email: string;
  @Attr(null) declare name: string;
  @Attr(null) declare last_name: string;
  @Attr(null) declare middle_name: string;
  @Attr(null) declare phone: string;
  @Attr(null) declare phone_short: string;
  @Attr(null) declare phone_list: string[];
  @Attr(null) declare avatar: string;
  @Attr({}) declare property: Record<string, any>;
  @Attr(null) declare role: string;
  @Attr(null) declare created_at?: string;
  @Attr(null) declare updated_at?: string;
  @Attr(null) declare deleted_at?: string;
  @Attr(null) declare activation_code: string;
  @Attr(null) declare persist_code: string;
  @Attr(null) declare reset_password_code: string;
  @Attr(null) declare permissions: string;
  @Attr(null) declare activated_at: string;
  @Attr(null) declare last_login: string;
  @Attr(null) declare active_currency_code: string;
  @Bool(true) declare is_activated: boolean;
  @Bool(false) declare is_superuser: boolean;

  @HasMany(() => Address, 'user_id') declare address: Address[];
}

export default User;
