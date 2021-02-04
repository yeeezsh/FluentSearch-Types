import { BaseFileSchema } from '..';
import { ImageMeta } from '../common/image-meta';
import { FileTypeEnum } from '../enums/file-type.enum';

export type ImageFileSchema = BaseFileSchema<FileTypeEnum.Image, ImageMeta>;
