import { BaseTypeSchema } from '.';
import { ImageFileSchema, ImageThumbnailFileSchema } from '../..';
import { VideoFileSchema } from '../../file';
import { TaskTypeEnum } from '../enums';

export type TaskSchema = BaseTypeSchema & {
  type: TaskTypeEnum;
  group?: string;
  order: number;
  file?:
    | ImageFileSchema['_id']
    | ImageThumbnailFileSchema['_id']
    | VideoFileSchema['_id'];
};
