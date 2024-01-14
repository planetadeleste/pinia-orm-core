import type { Result } from '@planetadeleste/pinia-orm-core';
import { Model } from '@planetadeleste/pinia-orm-core';
import type { ModelFields } from 'pinia-orm';
import type { Request } from '@pinia-orm/axios';
import type { AxiosResponse } from 'axios';
import type {
  ResponseCheck,
  ResponseCsrf,
  ResponseLoginRegisterData,
} from '../types';

class Auth extends Model {
  static entity = 'sha_auth';
  static baseUrl = 'auth';
  static namespace = 'auth';

  static config = {
    axiosApi: {
      actions: {
        async check(this: Request) {
          const obResponse = await this.post(`${Auth.baseUrl}/check`);
          return obResponse.response as AxiosResponse<Result<ResponseCheck>>;
        },

        async csrf(this: Request) {
          const obResponse = await this.get(`${Auth.baseUrl}/csrf`);
          return obResponse.response as AxiosResponse<Result<ResponseCsrf>>;
        },

        async login(this: Request, email: string, password: string) {
          const obResponse = await this.post(`${Auth.baseUrl}/login`, {
            email,
            password,
          });
          return obResponse.response as AxiosResponse<
            Result<ResponseLoginRegisterData>
          >;
        },

        async restorePassword(this: Request, email: string) {
          const obResponse = await this.post(
            `${Auth.baseUrl}/restore_password`,
            { email }
          );
          return obResponse.response as AxiosResponse<Result<null>>;
        },

        async resetPassword(
          this: Request,
          sCode: string,
          sPass: string,
          sPassConfirm: string
        ) {
          const obData = {
            slug: sCode,
            password: sPass,
            password_confirmation: sPassConfirm,
          };
          const obResponse = await this.post(
            `${Auth.baseUrl}/reset_password`,
            obData
          );
          return obResponse.response as AxiosResponse<Result<null>>;
        },

        async checkResetCode(this: Request, sCode: string) {
          const obResponse = await this.get(
            `${Auth.baseUrl}/reset_password/${sCode}`
          );
          return obResponse.response as AxiosResponse<Result<null>>;
        },

        async logout(this: Request, sTokenKey = 'access_token') {
          const sToken = localStorage.getItem(sTokenKey);
          const obData = { token: sToken };

          if (!sToken) {
            // eslint-disable-next-line no-throw-literal
            throw 'token.not.provided';
          }

          const obResponse = await this.post(
            `${Auth.baseUrl}/invalidate`,
            obData
          );
          return obResponse.response as AxiosResponse<Result<string>>;
        },

        async register(this: Request, obData: Record<string, any>) {
          const obResponse = await this.post(
            `${Auth.baseUrl}/register`,
            obData
          );
          return obResponse.response as AxiosResponse<
            Result<ResponseLoginRegisterData>
          >;
        },

        async refresh(this: Request) {
          const obResponse = await this.post(`${Auth.baseUrl}/refresh`);
          return obResponse.response as AxiosResponse<
            Result<ResponseLoginRegisterData>
          >;
        },
      },
    },
  };

  static fields(): ModelFields {
    return {};
  }
}

export default Auth;
