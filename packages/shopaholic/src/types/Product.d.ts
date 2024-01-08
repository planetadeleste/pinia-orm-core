import type { FileData }                           from "@planetadeleste/pinia-orm-core";
import type { BrandData, CategoryData, OfferData } from "./index";

export interface ProductData {
  id: number | string;
  category_id: number;
  brand_id: number;
  brand: Partial<BrandData>;
  category: Partial<CategoryData>;
  slug: string;
  name: string;
  category_name: string;
  offers: OfferData[];
  images: FileData[];
  preview_image: string;
  preview_text: string;
  created_at?: string;
  updated_at?: string;
  active: boolean;
  external_id: string;
  description: string;
  secondary_thumb: string;
  thumbnail: string;
  code: string;
}
