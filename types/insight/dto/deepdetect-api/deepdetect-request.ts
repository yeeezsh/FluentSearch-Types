export type ParametersRequestAPI = {
  input?: Record<string, string>;
  output: {
    confidence_threshold: number;
    bbox: boolean;
  };
  mllib: {
    gpu: boolean;
  };
};

export type DeepDetectRequestAPI = {
  service: string;
  parameters: ParametersRequestAPI;
  data: string[];
};
