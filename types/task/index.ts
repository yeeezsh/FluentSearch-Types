import { User } from 'types/user';
import { TaskStateEnum } from './enums/task-state.enum';

type BaseType = {
  _id: string;
  label: string;
  owner: User['_id'];
  state: TaskStateEnum;
};

export type Task =
  | BaseType
  | {
      group?: string;
      order: number;
    };

export type TaskGroup =
  | BaseType
  | {
      order: number;
      processing: number;
      wait: number;
      total: number;
    };
