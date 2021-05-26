import { BaseTypeSchema } from '.';
import { File } from '../../entity';
import { FileTypeEnum } from '../../file';

export type TaskSchema = BaseTypeSchema & {
  group?: string;
  uri?: string;
  fileId?: File['_id'];
  fileType?: FileTypeEnum;
};
