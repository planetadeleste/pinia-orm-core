import Model                          from '@planetadeleste/pinia-orm-core';
import type { AddressData, UserData } from './types';

// USER
interface User extends UserData {
}

declare class User extends Model<UserData> {}

// AUTH
declare class Auth extends Model {}

// ADDRESS
interface Address extends AddressData {
}

declare class Address extends Model<AddressData> {}

export { User, Auth, Address };

export {
  AddressData,
  AddressUpdateResponse,
  GroupData,
  ProfileData,
  ResponseCheck,
  ResponseCsrf,
  ResponseLoginRegisterData,
  UserData,
  AuthAxiosRepository,
  AuthApiAxiosRepository,
} from './types';
