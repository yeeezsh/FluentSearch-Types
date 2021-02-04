import { User, ImageFileSchema, ImageThumbnailFileSchema } from '..';
import { TaskStateEnum } from './enums/task-state.enum';

type BaseType = {
  _id: string;
  label: string;
  owner: User['_id'];
  state: TaskStateEnum;

  createAt: Date;
  updateAt: Date;
};

export type Task = BaseType & {
  group?: string;
  order: number;
  file?: ImageFileSchema['_id'] | ImageThumbnailFileSchema['_id'];
};

export type TaskGroup = BaseType & {
  current: Task['_id'][];
  order: number;
  processing: number;
  wait: number;
  total: number;
};

export * from './enums';
