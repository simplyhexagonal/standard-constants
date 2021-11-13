import { DigitalDocument } from "..";
import { ImageQuality } from "../../../intangible/quantity/display";

export enum VideoDocumentFormat {
  WEBM = 'webm',
  MKV = 'mkv',
  FLV = 'flv',
  VOB = 'vob',
  OGV = 'ogv',
  OGG = 'ogg',
  DRC = 'drc',
  GIF = 'gif',
  GIFV = 'gifv',
  MNG = 'mng',
  LBR = 'lbr',
  AVI = 'avi',
  MTS = 'MTS',
  M2TS = 'M2TS',
  TS = 'TS',
  MOV = 'mov',
  QT = 'qt',
  WMV = 'wmv',
  YUV = 'yuv',
  RM = 'rm',
  RMVB = 'rmvb',
  VIV = 'viv',
  ASF = 'asf',
  AMV = 'amv',
  MP4 = 'mp4',
  M4P = 'm4p',
  MPG = 'mpg',
  MP2 = 'mp2',
  MPEG = 'mpeg',
  MPE = 'mpe',
  MPV = 'mpv',
  M2V = 'm2v',
  M4V = 'm4v',
  SVI = 'svi',
  '3GP' = '3gp',
  '3G2' = '3g2',
  MXF = 'mxf',
  ROQ = 'roq',
  NSV = 'nsv',
  F4V = 'f4v',
  F4P = 'f4p',
  F4A = 'f4a',
  F4B = 'f4b',
  RAW = 'raw',
}

export const VIDEO_DOCUMENT_FORMATS = { ...VideoDocumentFormat };

export interface VideoDocument extends DigitalDocument {
  format: VideoDocumentFormat;
  imageQuality?: ImageQuality;
  framesPerSecond?: number;
  runtimeMilliseconds?: number;
}
