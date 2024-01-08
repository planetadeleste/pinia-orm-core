import Model                from '@planetadeleste/pinia-orm-core';
import type { ModelFields } from 'pinia-orm';
import type { UserData }    from '../types';
import Address              from './Address';

class User extends Model<UserData> {
  static entity = 'sha_users';
  static baseUrl = 'users';
  static namespace = 'auth';

  static fields(): ModelFields {
    return {
      id: this.attr(''),
      groups: this.attr(null),
      email: this.attr(null),
      name: this.attr(null),
      last_name: this.attr(null),
      middle_name: this.attr(null),
      phone: this.attr(null),
      phone_short: this.attr(null),
      phone_list: this.attr(null),
      avatar: this.attr(null),
      role: this.attr(null),
      activation_code: this.attr(null),
      persist_code: this.attr(null),
      reset_password_code: this.attr(null),
      permissions: this.attr(null),
      is_activated: this.boolean(true),
      activated_at: this.attr(null),
      last_login: this.attr(null),
      is_superuser: this.boolean(false),
      active_currency_code: this.attr(null),
      property: this.attr({}),
      address: this.hasMany(Address, 'user_id'),
    };
  }
}

export default User;
