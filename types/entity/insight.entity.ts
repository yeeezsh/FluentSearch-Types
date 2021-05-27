import { Document, Schema } from 'mongoose';
import { FileTypeEnum } from '..';
import { LanguageEnum } from '../common';
import { InsightSchema, ModelEnum } from '../insight';

const insightSchema = new Schema<InsightSchema>({
  result: {
    prob: { type: Number },
    bbox: { type: Object },
    cat: { type: String, index: true },
  },
  keyword: { type: String, index: true },
  owner: { type: String, index: true, required: true },

  model: { type: ModelEnum, index: true },
  bbox: { type: Object },
  prob: { type: Number },
  lang: { type: LanguageEnum },

  fileId: { type: String, index: true },
  fileType: { type: FileTypeEnum, index: true },
  fps: { type: Number, index: true },

  createAt: { type: Date, default: Date.now, index: true },
  updateAt: { type: Date, default: Date.now, index: true },
});

export default insightSchema;

export type InsightDocument = Document & InsightSchema;
export const INSIGHT_SCHEMA_NAME = 'insights';
