import { User } from '..';
import { ZoneEnum } from '../common/zone.enum';
import { FileExtensionEnum } from './enums/file-extenstion.enum';
import { FileTypeEnum } from './enums/file-type.enum';

export type BaseFile<T extends FileTypeEnum, M> = {
  _id: string;
  meta: BaseFileMeta<M>;
  owner: User['_id'];
  zone: ZoneEnum;
  label: string;
  type: T;

  createAt: Date;
  updateAt: Date;
};

export type BaseFileMeta<P> = {
  size: number; // bytes
  filename: string;
  extension: FileExtensionEnum;
  contentType: string;
  sha1?: string;
} & P;

export * from './common';
export * from './image';
export * from './image-thumbnail';
export * from './enums';
