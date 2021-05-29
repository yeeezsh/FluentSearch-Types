import { Document, Schema } from 'mongoose';
import { QuotaSchema } from '../quota';

const quotaSchema = new Schema<QuotaDocument>({
  owner: { type: String },
  available: { type: Number },
});

export default quotaSchema;

export type QuotaDocument = Document & QuotaSchema;
export const QUOTAS_SCHEMA_NAME = 'quotas';
