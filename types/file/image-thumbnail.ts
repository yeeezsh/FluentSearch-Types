import { BaseFile } from '.';
import { ImageMeta } from './common/image-meta';
import { FileTypeEnum } from './enums/file-type.enum';

export type ImageThumbnailFile = BaseFile<FileTypeEnum.ImageThumbnail, ImageMeta>;
