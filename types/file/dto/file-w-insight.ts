import { BaseFileSchema, FileTypeEnum } from '..';
import { InsightInfoDto } from '../../insight';

//DEPRECATED: after nsc it never be used
export type FileWithInsightDto<T extends FileTypeEnum, M> = BaseFileSchema<T, M> & {
  uri: string;
  insight?: InsightInfoDto[];
};
