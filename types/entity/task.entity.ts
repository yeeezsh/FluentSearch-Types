import { Document, Schema } from 'mongoose';
import { FileTypeEnum } from '../file';
import { TaskSchema, TaskStateEnum, TaskTypeEnum } from '../task';

const taskSchema = new Schema<TaskSchema>({
  label: { type: String },
  owner: { type: String, index: true },
  state: { type: TaskStateEnum, index: true },
  error: { type: String },

  priority: { type: Number, index: true, default: 0 },
  type: { type: TaskTypeEnum, index: true },
  group: { type: String, index: true },
  uri: { type: String },
  fileId: { type: String, index: true },
  fileType: { type: FileTypeEnum },

  createAt: { type: Date, default: Date.now, required: true },
  updateAt: { type: Date, default: Date.now, required: true },
});

export default taskSchema;

export type TaskDocument = Document & TaskSchema;

export const TASKS_SCHEMA_NAME = 'tasks';
