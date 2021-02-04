import { ClassResponseApi, ModelEnum } from '..';
import { LanguageEnum } from '../../common/lang.enum';
import { BBoxResponseApi } from '../dto/deepdetect-api';

export type InsightSchema = {
  _id: string;
  label: string;
  result: ClassResponseApi['cat'];
  model: ModelEnum;
  bbox?: BBoxResponseApi;
  prob: ClassResponseApi['prob'];
  lang: LanguageEnum;

  createAt: Date;
  updateAt: Date;
};
