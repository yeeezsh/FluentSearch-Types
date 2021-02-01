import { OAuthProviderEnum } from './enums/oauth-provider.enum';
import { UserPackageEnum } from './enums/user-packages.enum';
import { UserRoleEnum } from './enums/user-role.enum';
import { UserZoneEnum } from './enums/user-zone';

export type User = {
  mainEmail: string;
  email: string[];
  password: string;
  oauth: UserToken[] | [];
  name: string;
  // logic
  role: UserRoleEnum;
  package: UserPackageEnum;

  //   meta
  zone: UserZoneEnum;
  deactivate?: boolean;

  createDate: Date;
  updateDate: Date;
};

export type UserToken = {
  provider: OAuthProviderEnum;
  token: string;
};

export type UserSession = {
  id: string;
  mainEmail: string;
  name: string;
  role: UserRoleEnum;
  package: UserPackageEnum;
  zone: UserZoneEnum;
};
