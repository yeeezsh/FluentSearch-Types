import { TaskStateEnum } from '..';
import { UserSchema } from '../..';

export type BaseTypeSchema = {
  _id: string;
  label: string;
  owner: UserSchema['_id'];
  state: TaskStateEnum;
  priority: number;

  error?: string;

  createAt: Date;
  updateAt: Date;
};

export * from './task';
