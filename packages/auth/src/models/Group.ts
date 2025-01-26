import { Model } from '@planetadeleste/pinia-orm-core';
import { Attr } from 'pinia-orm/decorators';

class Group extends Model {
  static entity = 'sha_groups';
  static baseUrl = 'groups';
  static namespace = 'auth';

  @Attr('') declare id: number | string;
  @Attr(null) declare name: string;
  @Attr(null) declare code: string;
  @Attr(null) declare description: string;
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at?: string;
}

export default Group;
