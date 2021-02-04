export type BBox = {
  xmax: number;
  ymax: number;
  ymin: number;
  xmin: number;
};

export type Class = {
  prob: number;
  bbox?: BBox;
  cat: string;
};

export type Prediction = {
  classes: Class[];
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
    predictions: Prediction[];
  };
};
