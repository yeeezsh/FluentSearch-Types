export type BBoxResponseApi = {
  xmax: number;
  ymax: number;
  ymin: number;
  xmin: number;
};

export type ClassResponseApi = {
  prob: number;
  bbox?: BBoxResponseApi;
  cat: string;
};

export type PredictionResponseApi = {
  classes: ClassResponseApi[];
  uri: string;
};

export type DeepDetectResponseApi = {
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
