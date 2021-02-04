import { BaseType, Task } from '.';

export type TaskGroup = BaseType & {
  current: Task['_id'][];
  order: number;
  processing: number;
  wait: number;
  total: number;
};
