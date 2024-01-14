import { Model } from '@planetadeleste/pinia-orm-core';
import type { ModelFields } from 'pinia-orm';

class Group extends Model {
  static entity = 'sha_groups';
  static baseUrl = 'groups';
  static namespace = 'auth';

  static fields(): ModelFields {
    return {
      id: this.attr(''),
      name: this.attr(null),
      code: this.attr(null),
      last_name: this.attr(null),
      description: this.attr(null),
    };
  }
}

export default Group;
