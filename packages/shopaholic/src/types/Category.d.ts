import type { FileData }    from "@planetadeleste/pinia-orm-core";
import type Category from "../models/Category";

export interface CategoryData {
  id: number | string;
  parent_id: number;
  company_id: string;
  active: boolean;
  name: string;
  code: string;
  slug: string;
  preview_image: string;
  images: FileData[];
  preview_text: string;
  created_at?: string;
  updated_at?: string;
  description: string;
  external_id: string;
  children: Category[];
}
