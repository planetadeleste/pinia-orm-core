import { Model } from '@planetadeleste/pinia-orm-core';
import User from './User';

class Address extends Model {
  static entity = 'sha_address';
  static baseUrl = 'address';
  static namespace = 'auth';

  static fields() {
    return {
      id: this.attr(''),
      user_id: this.attr(null),
      type: this.attr(null),
      country: this.attr(null),
      state: this.attr(null),
      city: this.attr(null),
      country_text: this.attr(null),
      state_text: this.attr(null),
      city_text: this.attr(null),
      street: this.attr(null),
      house: this.attr(null),
      building: this.attr(null),
      flat: this.attr(null),
      floor: this.attr(null),
      address1: this.attr(null),
      address2: this.attr(null),
      postcode: this.attr(null),

      user: this.belongsTo(User, 'user_id'),
    };
  }
}

export default Address;
