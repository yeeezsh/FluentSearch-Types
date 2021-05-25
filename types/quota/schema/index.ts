import { UserSchema } from '../..';

export type QuotaSchema = {
  owner: UserSchema['_id'];
  available: number;
};
