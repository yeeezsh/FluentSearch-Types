import { BaseType } from '.';
import { ImageFileSchema, ImageThumbnailFileSchema } from '../..';

export type Task = BaseType & {
  group?: string;
  order: number;
  file?: ImageFileSchema['_id'] | ImageThumbnailFileSchema['_id'];
};
