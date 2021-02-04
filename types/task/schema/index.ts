import { TaskStateEnum } from '..';
import { User } from '../..';

export type BaseTypeSchema = {
  _id: string;
  label: string;
  owner: User['_id'];
  state: TaskStateEnum;

  createAt: Date;
  updateAt: Date;
};

export * from './task';
export * from './task-group';
