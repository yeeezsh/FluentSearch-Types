export type VideoMeta = {
  width: number; // px
  height: number; // px
  fps: number;
  codec: string;
  bitrate: number;

  audio: {
    channel: number;
    bitrate: number;
    codec: string;
  };
};
