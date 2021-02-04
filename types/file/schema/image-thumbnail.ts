import { BaseFileSchema } from '..';
import { ImageMeta } from '../common/image-meta';
import { FileTypeEnum } from '../enums/file-type.enum';

export type ImageThumbnailFileSchema = BaseFileSchema<
  FileTypeEnum.ImageThumbnail,
  ImageMeta
>;
