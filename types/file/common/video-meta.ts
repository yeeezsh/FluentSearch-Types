export type VideoMeta = {
  width: number; // px
  height: number; // px
  fps: number;
  codec: string;
  bitrate: number;

  duration: {
    original: string;
    hour: number;
    minute: number;
    second: number;
  };

  audio: {
    channel: number;
    bitrate: number;
    codec: string;
  };
};
