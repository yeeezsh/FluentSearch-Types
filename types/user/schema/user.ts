import { UserRoleEnum, UserPackageEnum, UserZoneEnum, OAuthProviderEnum } from '..';

export type UserSchema = {
  _id: string;
  mainEmail: string;
  email: string[];
  password: string;
  oauth: OAuthTokenSchema[] | [];
  name: string;
  // logic
  role: UserRoleEnum;
  package: UserPackageEnum;

  //   meta
  zone: UserZoneEnum;
  deactivate?: boolean;

  createAt: Date;
  updateAt: Date;
};

export type OAuthTokenSchema = {
  provider: OAuthProviderEnum;
  token: string;
};
