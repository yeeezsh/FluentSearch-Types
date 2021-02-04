import { Class, ModelEnum } from '..';
import { LanguageEnum } from '../../common/lang.enum';
import { BBox } from '../deepdetect-api';

export type InsightSchema = {
  _id: string;
  label: string;
  result: Class['cat'];
  model: ModelEnum;
  bbox?: BBox;
  prob: Class['prob'];
  lang: LanguageEnum;

  createAt: Date;
  updateAt: Date;
};
