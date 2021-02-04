import { FileTypeEnum, FileExtensionEnum } from '..';
import { UserSchema, ZoneEnum } from '../..';

export type BaseFileSchema<T extends FileTypeEnum, M> = {
  _id: string;
  meta: BaseFileMetaSchema<M>;
  owner: UserSchema['_id'];
  zone: ZoneEnum;
  label: string;
  type: T;

  createAt: Date;
  updateAt: Date;
};

export type BaseFileMetaSchema<P> = {
  size: number; // bytes
  filename: string;
  extension: FileExtensionEnum;
  contentType: string;
  sha1?: string;
} & P;

export * from './image';
export * from './image-thumbnail';
