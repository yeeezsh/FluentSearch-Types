import { BaseTypeSchema } from '.';
import { File } from '../../entity';
import { TaskTypeEnum } from '../enums';

export type TaskSchema = BaseTypeSchema & {
  type: TaskTypeEnum;
  group?: string;
  uri?: string;
  fileId?: File['_id'];
};
