import { DigitalDocument } from "..";
import { Quantity } from "../../../intangible/quantity";
import {
  HertzUnit,
  KiloHertzUnit,
} from "../../../intangible/quantity/physical/derived-units/frequency";

export enum AudioDocumentFormat {
  '3GP' = '3gp',
  AA = 'aa',
  AAC = 'aac',
  AAX = 'aax',
  ACT = 'act',
  AIFF = 'aiff',
  ALAC = 'alac',
  AMR = 'amr',
  APE = 'ape',
  AU = 'au',
  AWB = 'awb',
  DSS = 'dss',
  DVF = 'dvf',
  FLAC = 'flac',
  GSM = 'gsm',
  IKLAX = 'iklax',
  IVS = 'ivs',
  M4A = 'm4a',
  M4B = 'm4b',
  M4P = 'm4p',
  MMF = 'mmf',
  MP3 = 'mp3',
  MPC = 'mpc',
  MSV = 'msv',
  NMF = 'nmf',
  OGG = 'ogg',
  OGA = 'oga',
  MOGG = 'mogg',
  OPUS = 'opus',
  RA = 'ra',
  RM = 'rm',
  RAW = 'raw',
  RF64 = 'rf64',
  SLN = 'sln',
  TTA = 'tta',
  VOC = 'voc',
  VOX = 'vox',
  WAV = 'wav',
  WMA = 'wma',
  WV = 'wv',
  WEBM = 'webm',
  '8SVX' = '8svx',
  CDA = 'cda',
}

export const AUDIO_DOCUMENT_FORMATS = { ...AudioDocumentFormat };

export interface SampleRate extends Quantity {
  unit: KiloHertzUnit | HertzUnit;
}

export interface AudioDocument extends DigitalDocument {
  format: AudioDocumentFormat;
  sampleRate?: SampleRate;
};
