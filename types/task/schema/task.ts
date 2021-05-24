import { BaseTypeSchema } from '.';
import { TaskTypeEnum } from '../enums';

export type TaskSchema = BaseTypeSchema & {
  type: TaskTypeEnum;
  group?: string;
  uri?: string;
};
