import { MllibEnum } from '../../enums';

export type DeepDetectInitApi = {
  description: string;
  model: {
    repository: string;
    create_repository: true;
    init: string;
  };
  mllib: MllibEnum;
  type: 'supervised';
  parameters: {
    input: {
      connector: 'image';
    };
  };
};
