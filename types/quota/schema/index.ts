import { UserSchema } from '../..';

export type Quota = {
  owner: UserSchema['_id'];
  available: number;
};
