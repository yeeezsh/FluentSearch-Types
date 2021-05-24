import { BaseTypeSchema } from '.';

export type TaskGroupSchema = BaseTypeSchema & {
  processing: number;
  wait: number;
  total: number;
};
