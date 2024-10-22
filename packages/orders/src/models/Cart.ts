import type { Result } from "@planetadeleste/pinia-orm-core";
import { Model } from "@planetadeleste/pinia-orm-core";
import type { Request } from "@pinia-orm/axios";
import type { AxiosResponse } from "axios";
import type {
  CartComponentAddData,
  CartComponentItemsData,
  CartComponentRemoveData,
  CartData,
} from "../types";

class Cart extends Model {
  static entity = "sha_cart";
  static baseUrl = "cart";
  static namespace = "orders";

  static config = {
    axiosApi: {
      actions: {
        async add(
          this: Request,
          obData: CartComponentAddData,
          bReturnData: boolean,
        ) {
          if (bReturnData) {
            obData.return_data = true;
          }
          const obResponse = await this.post(`${Cart.baseUrl}/add`, obData, {
            save: false,
          });

          return obResponse.response as AxiosResponse<
            Result<CartData | CartComponentItemsData>
          >;
        },

        async getData(this: Request) {
          const obResponse = await this.get(`${Cart.baseUrl}/data`);

          return obResponse.response as AxiosResponse<Result<CartData>>;
        },

        async getItems(this: Request) {
          const obResponse = await this.get(`${Cart.baseUrl}/get`);

          return obResponse.response as AxiosResponse<
            Result<CartComponentItemsData>
          >;
        },

        async remove(
          this: Request,
          obData: CartComponentRemoveData,
          bReturnData: boolean,
        ) {
          if (bReturnData) {
            obData.return_data = true;
          }
          const obResponse = await this.post(`${Cart.baseUrl}/remove`, obData, {
            save: false,
          });

          return obResponse.response as AxiosResponse<
            Result<CartData | CartComponentItemsData>
          >;
        },

        async update(
          this: Request,
          obData: CartComponentAddData,
          bReturnData: boolean,
        ) {
          if (bReturnData) {
            obData.return_data = true;
          }
          const obResponse = await this.post(`${Cart.baseUrl}/update`, obData, {
            save: false,
          });

          return obResponse.response as AxiosResponse<
            Result<CartData | CartComponentItemsData>
          >;
        },
      },
    },
  };

  static fields(): Record<string, any> {
    return {
      id: this.attr(""),
      name: this.attr(null),
      name_for_user: this.attr(null),
      code: this.attr(null),
      preview_text: this.attr(null),
      is_user_show: this.attr(null),
      user_status_id: this.attr(null),
      color: this.attr(null),
    };
  }
}

export default Cart;
