import type { Result } from "@planetadeleste/pinia-orm-core";
import { Model } from "@planetadeleste/pinia-orm-core";
import type { Request } from "@pinia-orm/axios";
import type { AxiosResponse } from "axios";
import { Attr, HasMany, OnDelete } from "pinia-orm/decorators";
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

  @Attr(null) declare id;
  @Attr(null) declare parent_id: string;
  @Attr(null) declare company_id: string;
  @Attr(true) declare active: boolean;
  @Attr(null) declare name: string;
  @Attr(null) declare code: string;
  @Attr(null) declare slug: string;
  @Attr(null) declare preview_image: string;
  @Attr(null) declare images: string;
  @Attr(null) declare preview_text: string;
  @Attr(null) declare description: string;
  @Attr(null) declare external_id: string;
  @Attr(null) declare created_at;
  @Attr(null) declare updated_at;

  @HasMany(() => Category, "parent_id")
  @OnDelete("cascade")
  declare children: Category[];
}

export default Category;
