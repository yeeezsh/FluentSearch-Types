import { BaseFile } from '.';
import { FileTypeEnum } from './enums/file-type.enum';
import { ImageMeta } from './common/image-meta';

export type ImageFile = BaseFile<FileTypeEnum.Image, ImageMeta>;
