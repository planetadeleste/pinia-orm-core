import type { Result } from "@planetadeleste/pinia-orm-core";
import { Model } from "@planetadeleste/pinia-orm-core";
import type { Request } from "@pinia-orm/axios";
import type { ModelFields } from "pinia-orm";
import type { AxiosResponse } from "axios";
import type { CategoryData } from "../types";

class Category extends Model {
  static entity = "sha_categories";
  static baseUrl = "categories";
  static namespace = "shopaholic";
  static config = {
    axiosApi: {
      actions: {
        async list(this: Request) {
          const obResponse = await this.get(`${Category.baseUrl}/list`);
          return obResponse.response as AxiosResponse<Result<CategoryData[]>>;
        },
        async tree(this: Request) {
          const obResponse = await this.get(`${Category.baseUrl}/tree`);
          return obResponse.response as AxiosResponse<Result<CategoryData[]>>;
        },
      },
    },
  };

  static fields(): ModelFields {
    return {
      id: this.attr(""),
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

      children: this.hasMany(Category, "parent_id").onDelete("cascade"),
    };
  }
}

export default Category;
