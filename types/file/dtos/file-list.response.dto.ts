import { FileTypeEnum, UserSchema, ZoneEnum } from '../..';

export type FileListResponseDTO = {
  _id: string;
  owner: UserSchema['_id'];
  zone: ZoneEnum;
  label: string;
  type: FileTypeEnum;
  refs?: string; // for indexing image/video thumbnail

  uri: string;
  thumbnail_uri: string;

  createAt: Date;
  updateAt: Date;
};
