import Model from '@planetadeleste/pinia-orm-core';
import type { AddressData, UserData, GroupData } from './types';

// USER
interface User extends UserData {}

declare class User extends Model<UserData> {}

// GROUP
interface Group extends GroupData {}

declare class Group extends Model<GroupData> {}

// AUTH
declare class Auth extends Model {}

// ADDRESS
interface Address extends AddressData {}

declare class Address extends Model<AddressData> {}

export { User, Auth, Address, Group };

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
