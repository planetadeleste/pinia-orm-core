import type { FileData }    from "@planetadeleste/pinia-orm-core";
import type { ProductData } from "./index";

export interface OfferData {
  id: number | string;
  product_id: number;
  name: string;
  item_type: string;
  item_id: string;
  code: string;
  price: string | number;
  price_value: number;
  old_price: string;
  old_price_value: number;
  quantity: number;
  currency: string;
  preview_text: string;
  thumbnail: string;
  text: string;
  value: number;
  active: boolean;
  description: string;
  preview_image: string;
  images: FileData[];
  property: Record<string, any>;
  product: Partial<ProductData>;
}
