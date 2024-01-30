import { Model } from "@planetadeleste/pinia-orm-core";
import type {
  CartData,
  OrderData,
  OrderPositionData,
  PaymentMethodData,
  ShippingTypeData,
  StatusData,
} from "./types";

// STATUS
interface Status extends StatusData {}

declare class Status extends Model<StatusData> {}

// SHIPPING TYPE
interface ShippingType extends ShippingTypeData {}

declare class ShippingType extends Model<ShippingTypeData> {}

// PAYMENT METHOD
interface PaymentMethod extends PaymentMethodData {}

declare class PaymentMethod extends Model<PaymentMethodData> {}

// CART
interface Cart extends CartData {}

declare class Cart extends Model<CartData> {}

// ORDER
interface Order extends OrderData {}
declare class Order extends Model<OrderData> {}

// ORDER POSITIONS
interface OrderPosition extends OrderPositionData {}
declare class OrderPosition extends Model<OrderPositionData> {}

export { Status, ShippingType, PaymentMethod, Cart, Order, OrderPosition };
export type {
  CartApiAxiosRepository,
  CartAxiosRepository,
  CartComponentAddData,
  CartComponentAddItemData,
  CartComponentItemsData,
  CartComponentPositionData,
  CartComponentRemoveData,
  CartData,
  CartPositionData,
  ItemPriceData,
  MakeOrderResponseData,
  OrderData,
  OrderPositionData,
  OrderRequestData,
  OrderRequestOrderData,
  OrderRequestUserData,
  PaymentMethodData,
  ShippingTypeData,
  StatusData,
  TotalPriceContainerData,
} from "./types";
