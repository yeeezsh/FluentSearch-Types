import { ZoneEnum } from 'types/common/zone.enum';
import { User } from 'types/user';
import { FileExtensionEnum } from './enums/file-extenstion.enum';
import { FileTypeEnum } from './enums/file-type.enum';

export type BaseFile<T extends FileTypeEnum, P, M> =
  | {
      _id: string;
      meta: BaseFileMeta<M>;
      owner: User['_id'];
      zone: ZoneEnum;
      label: string;
      type: T;

      createAt: Date;
      updateAt: Date;
    }
  | P;

export type BaseFileMeta<P> =
  | {
      size: number; // bytes
      filename: string;
      md5: string;
      extension: FileExtensionEnum;
      contentType: string;
    }
  | P;

export * from './photo';
