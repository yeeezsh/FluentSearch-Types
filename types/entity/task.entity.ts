import { Document, Schema } from 'mongoose';
import { TaskSchema, TaskStateEnum, TaskTypeEnum } from '../task';

const taskSchema = new Schema<TaskSchema>({
  label: { type: String },
  owner: { type: String, index: true },
  state: { type: TaskStateEnum, index: true },
  error: { type: String },

  type: { type: TaskTypeEnum, index: true },
  group: { type: String, index: true },
  uri: { type: String },

  createAt: { type: Date, default: Date.now, required: true },
  updateAt: { type: Date, default: Date.now, required: true },
});

export default taskSchema;

export type TaskDocument = Document & TaskSchema;
