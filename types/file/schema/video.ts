import { BaseFileSchema } from '.';
import { VideoMeta } from '../common/video-meta';
import { FileTypeEnum } from '../enums';

export type VideoFileSchema = BaseFileSchema<FileTypeEnum.Video, VideoMeta>;
