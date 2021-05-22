import { Document, Schema } from 'mongoose';
import { UserRoleEnum, UserPackageEnum, UserZoneEnum, OAuthProviderEnum } from '..';
import { UserSchema } from '../user';

export const userPackageConstant: UserPackageEnum[] = [
  UserPackageEnum.freeUser,
  UserPackageEnum.paidUser,
];

export const userRoleConstant: UserRoleEnum[] = [
  UserRoleEnum.staff,
  UserRoleEnum.admin,
  UserRoleEnum.user,
];

export const oAuthProviderConstant: OAuthProviderEnum[] = [OAuthProviderEnum.facebook];

export const userTokenSchema = new Schema(
  {
    provider: { type: String, required: true, enum: oAuthProviderConstant },
    token: { type: String, required: true },
  },
  { _id: false },
);

const userSchema = new Schema<UserDocument>({
  mainEmail: { type: String, unique: true },
  email: { type: [String], required: true },
  password: { type: String, required: true },
  oauth: { type: [userTokenSchema], required: false, default: [] },
  name: { type: String, required: true },

  // logic
  role: { type: UserRoleEnum, required: true, enum: userRoleConstant },
  package: { type: UserPackageEnum, required: true, enum: userPackageConstant },

  //   meta
  zone: { type: UserZoneEnum, default: UserZoneEnum.TH1, required: true },
  deactivate: {
    type: Boolean || undefined,
    required: false,
    default: undefined,
  },
  createAt: { type: Date, default: Date.now, required: true },
  updateAt: { type: Date, default: Date.now, required: true },
});

export type UserDocument = Document & UserSchema;

export default userSchema;
