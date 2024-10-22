import type { AxiosRepository, Request } from '@pinia-orm/axios';
import type { Result } from '@planetadeleste/pinia-orm-core';
import type { AxiosResponse } from 'axios';
import type { Auth } from '../index';
import type { ProfileData } from './Profile';
import type { GroupData } from './Group';

export interface ResponseLoginRegisterData {
  expires_in: number;
  expires: number;
  token: string;
  user?: ProfileData;
}

export interface ResponseCheck {
  group: GroupData[];
}

export interface ResponseCsrf {
  token: string;
}

export interface AuthAxiosRepository extends Request {
  check(): Promise<AxiosResponse<Result<ResponseCheck>>>;

  csrf(): Promise<AxiosResponse<Result<ResponseCsrf>>>;

  login(
    email: string,
    password: string
  ): Promise<AxiosResponse<Result<ResponseLoginRegisterData>>>;

  restorePassword(email: string): Promise<AxiosResponse<Result<null>>>;

  resetPassword(
    sCode: string,
    sPass: string,
    sPassConfirm: string
  ): Promise<AxiosResponse<Result<null>>>;

  checkResetCode(sCode: string): Promise<AxiosResponse<Result<null>>>;

  logout(sTokenKey?: string): Promise<AxiosResponse<Result<string>>>;

  register(
    obData: Record<string, any>
  ): Promise<AxiosResponse<Result<ResponseLoginRegisterData>>>;

  refresh(): Promise<AxiosResponse<Result<ResponseLoginRegisterData>>>;
}

// @ts-ignore
export interface AuthApiAxiosRepository extends AxiosRepository<Auth> {
  api(): AuthAxiosRepository;
}
