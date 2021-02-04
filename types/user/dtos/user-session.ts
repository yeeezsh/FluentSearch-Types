import { UserRoleEnum, UserPackageEnum, UserZoneEnum } from '..';

export type UserSessionDto = {
  _id: string;
  mainEmail: string;
  name: string;
  role: UserRoleEnum;
  package: UserPackageEnum;
  zone: UserZoneEnum;
};
