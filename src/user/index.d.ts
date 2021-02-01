import { UserPackageEnum } from './enums/user-packages.enum';
import { UserRoleEnum } from './enums/user-role.enum';
import { UserZoneEnum } from './enums/user-zone';
import { UserToken } from './user-token';

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
