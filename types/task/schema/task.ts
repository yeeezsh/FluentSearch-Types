import { BaseTypeSchema } from '.';
import { File } from '../../entity';

export type TaskSchema = BaseTypeSchema & {
  group?: string;
  uri?: string;
  fileId?: File['_id'];
  fileType?: File['type'];
};
