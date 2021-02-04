import { BaseTypeSchema } from '.';
import { ImageFileSchema, ImageThumbnailFileSchema } from '../..';

export type TaskSchema = BaseTypeSchema & {
  group?: string;
  order: number;
  file?: ImageFileSchema['_id'] | ImageThumbnailFileSchema['_id'];
};
