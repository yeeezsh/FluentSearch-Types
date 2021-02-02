import { BaseFile } from '.';
import { ImageMeta } from './common/image-meta';
import { FileTypeEnum } from './enums/file-type.enum';

export type ImageFile = BaseFile<FileTypeEnum.Image, ImageMeta>;
