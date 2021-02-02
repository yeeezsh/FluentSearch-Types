import { ImageFile, ImageThumbnailFile } from 'types/file';
import { User } from 'types/user';
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
  file?: ImageFile['_id'] | ImageThumbnailFile['_id'];
};

export type TaskGroup = BaseType & {
  order: number;
  processing: number;
  wait: number;
  total: number;
};
