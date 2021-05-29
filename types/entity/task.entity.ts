import { Document, Schema } from 'mongoose';
import { FileTypeEnum } from '../file';
import { TaskSchema, TaskStateEnum, TaskTypeEnum } from '../task';

const taskSchema = new Schema<TaskSchema>({
  label: { type: String },
  owner: { type: String },
  state: { type: TaskStateEnum },
  error: { type: String },

  priority: { type: Number, default: 0 },
  type: { type: TaskTypeEnum },
  group: { type: String },
  uri: { type: String },
  fileId: { type: String },
  fileType: { type: FileTypeEnum },

  createAt: { type: Date, default: Date.now, required: true },
  updateAt: { type: Date, default: Date.now, required: true },
});

export default taskSchema;

export type TaskDocument = Document & TaskSchema;

export const TASKS_SCHEMA_NAME = 'tasks';
