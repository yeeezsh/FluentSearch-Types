import { TaskStateEnum } from '..';
import { UserSchema } from '../..';

export type BaseTypeSchema = {
  _id: string;
  label: string;
  owner: UserSchema['_id'];
  state: TaskStateEnum;

  error?: string;

  createAt: Date;
  updateAt: Date;
};

export * from './task';
export * from './task-group';
