import { BaseTypeSchema, TaskSchema } from '.';

export type TaskGroupSchema = BaseTypeSchema & {
  current: TaskSchema['_id'][];
  order: number;
  processing: number;
  wait: number;
  total: number;
};
