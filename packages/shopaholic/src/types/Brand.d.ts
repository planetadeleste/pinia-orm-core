import type { FileData }    from "@planetadeleste/pinia-orm-core";

export interface BrandData {
  id: number | string;
  company_id: number | string;
  active: boolean;
  name: string;
  slug: string;
  code: string;
  preview_text: string;
  preview_image: string;
  images: FileData[];
  external_id: string;
  description: string;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}
