import { ClassResponseAPI, ModelEnum } from '..';
import { LanguageEnum } from '../../common/lang.enum';
import { BBoxResponseAPI } from '../dto/deepdetect-api';

export type InsightSchema = {
  _id: string;
  fileId: string;
  result: ClassResponseAPI['cat'];
  model: ModelEnum;
  bbox?: BBoxResponseAPI;
  prob: ClassResponseAPI['prob'];
  lang: LanguageEnum;

  createAt: Date;
  updateAt: Date;
};
