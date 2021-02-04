import { ModelEnum } from './enums';

export type InsightSchema = {
  label: string;
  model: ModelEnum;
};

export * from './enums';
export * from './deepdetect-api/';
