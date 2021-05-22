import { FileTypeEnum } from '..';
import { UserSchema, ZoneEnum } from '../..';

export type BaseFileSchema<T extends FileTypeEnum, M> = {
  _id: string;
  meta: BaseFileMetaSchema<M>;
  owner: UserSchema['_id'];
  zone: ZoneEnum;
  original_filename: string;
  type: T;

  createAt: Date;
  updateAt: Date;
};

export type BaseFileMetaSchema<P> = {
  size: number; // bytes
  extension: string;
  contentType: string;
  sha1?: string;
} & P;

export * from './image';
export * from './image-thumbnail';
export * from './video';
export * from './video-thumbnail';
