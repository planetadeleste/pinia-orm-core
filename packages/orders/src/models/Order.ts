import { Model } from "@planetadeleste/pinia-orm-core";
import { Currency } from "@planetadeleste/pinia-orm-shopaholic";
import { User } from "@planetadeleste/pinia-orm-auth";
import { Attr, BelongsTo, HasMany } from "pinia-orm/decorators";
import Status from "./Status";
import OrderPosition from "./OrderPosition";
import ShippingType from "./ShippingType";
import PaymentMethod from "./PaymentMethod";

class Order extends Model {
  static entity = "sha_order";
  static baseUrl = "orders";
  static namespace = "orders";

  @Attr("") declare id: number | string;
  @Attr(null) declare currency_id: number;
  @Attr(null) declare status_id: number;
  @Attr(null) declare transaction_id: number;
  @Attr(null) declare user_id: number;
  @Attr(null) declare payment_method_id: number;
  @Attr(null) declare shipping_type_id: number;
  @Attr(null) declare order_position_id: number;
  @Attr(null) declare order_promo_mechanism_id: number;
  @Attr(null) declare created_at: string;
  @Attr(null) declare updated_at: string;
  @Attr(null) declare order_number: string;
  @Attr(null) declare property: string;
  @Attr(null) declare secret_key: string;
  @Attr(null) declare weight: string;

  @BelongsTo(() => Status, "status_id") declare status: Status;
  @BelongsTo(() => Currency, "currency_id") declare currency: Currency;
  @BelongsTo(() => PaymentMethod, "payment_method_id")
  declare payment_method: PaymentMethod;

  @BelongsTo(() => ShippingType, "shipping_type_id")
  declare shipping_type: ShippingType;

  @BelongsTo(() => User, "user_id") declare user: User;
  @HasMany(() => OrderPosition, "order_id")
  declare order_position: OrderPosition;
}

export default Order;
