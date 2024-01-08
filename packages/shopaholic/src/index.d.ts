import Model                                                                  from "@planetadeleste/pinia-orm-core";
import type { BrandData, CategoryData, CurrencyData, OfferData, ProductData } from "./types";

// BRAND
interface Brand extends BrandData {
}

declare class Brand extends Model<BrandData> {}

// CATEGORY
interface Category extends CategoryData {
}

declare class Category extends Model<CategoryData> {}

// CURRENCY
interface Currency extends CurrencyData {
}

declare class Currency extends Model<CurrencyData> {}

// OFFER
interface Offer extends OfferData {
}

declare class Offer extends Model<OfferData> {}

// PRODUCT
interface Product extends ProductData {
}

declare class Product extends Model<ProductData> {}

export { Brand, Category, Currency, Offer, Product };

export type { BrandData, CategoryData, CurrencyData, OfferData, ProductData } from "./types";
