import { Document, Schema } from 'mongoose';
import { BaseFileSchema, FileTypeEnum } from '..';

const metaSchema = new Schema({
  width: { type: Number },
  height: { type: Number },
  size: { type: Number },
  contentType: { type: String },
  extension: { type: String },
});

const fileSchema = new Schema<FileDocument>({
  meta: { type: Object || metaSchema },
  owner: { type: String, index: true },
  zone: { type: String, index: true },
  original_filename: { type: String },
  type: { type: FileTypeEnum, index: true, enum: FileTypeEnum },
  refs: { type: String, index: true },

  createAt: { type: Date, default: Date.now, index: true },
  updateAt: { type: Date, default: Date.now, index: true },
});

export default fileSchema;

export type FileDocument = Document &
  BaseFileSchema<
    FileTypeEnum.Image | FileTypeEnum.ImageThumbnail | FileTypeEnum.Video,
    Record<string, any>
  >;

export type File = BaseFileSchema<
  FileTypeEnum.Image | FileTypeEnum.ImageThumbnail | FileTypeEnum.Video,
  Record<string, any>
>;

export const FILES_SCHEMA_NAME = 'files';
