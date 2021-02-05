export type BBoxResponseAPI = {
  xmax: number;
  ymax: number;
  ymin: number;
  xmin: number;
};

export type ClassResponseAPI = {
  prob: number;
  bbox?: BBoxResponseAPI;
  cat: string;
};

export type PredictionResponseApi = {
  classes: ClassResponseAPI[];
  uri: string;
};

export type DeepDetectResponseAPI = {
  status: {
    code: number;
    msg: string;
  };
  head: {
    method: string;
    service: string;
    time: number;
  };
  body: {
    predictions: PredictionResponseApi[];
  };
};
