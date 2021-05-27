import { ClassResponseAPI, ModelEnum } from '..';
import { LanguageEnum } from '../../common/lang.enum';
import { File } from '../../entity';
import { FileTypeEnum } from '../../file';
import { BBoxResponseAPI } from '../dto/deepdetect-api';

export type InsightSchema = {
  _id: string;
  owner: string;

  result: ClassResponseAPI['cat'];
  keyword: string;

  model: ModelEnum;
  bbox?: BBoxResponseAPI;
  prob: ClassResponseAPI['prob'];
  lang: LanguageEnum;

  fileId: File['_id'];
  fileType: FileTypeEnum;
  fps?: number;

  createAt: Date;
  updateAt: Date;
};
