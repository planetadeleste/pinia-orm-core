import Model from '@planetadeleste/pinia-orm-core';

import type { ModelFields } from 'pinia-orm';
import type { CategoryData } from "../types";

class Category extends Model<CategoryData> {
  static entity = 'sha_categories';
  static baseUrl = 'categories';
  static namespace = 'shopaholic';

  static fields(): ModelFields {
    return {
      id: this.attr(''),
      parent_id: this.attr(null),
      company_id: this.attr(null),
      active: this.boolean(true),
      name: this.attr(null),
      code: this.attr(null),
      slug: this.attr(null),
      preview_image: this.attr(null),
      images: this.attr(null),
      preview_text: this.attr(null),
      description: this.attr(null),
      external_id: this.attr(null),
      created_at: this.attr(null),
      updated_at: this.attr(null),

      children: this.hasMany(Category, 'parent_id').onDelete('cascade'),
    };
  }
}

export default Category;
