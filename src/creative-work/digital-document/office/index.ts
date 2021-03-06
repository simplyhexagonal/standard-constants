import { DigitalDocument } from "..";

export enum OfficeDocumentFormat {
  DOC = 'doc',
  DOT = 'dot',
  WBK = 'wbk',
  DOCX = 'docx',
  DOCM = 'docm',
  DOTX = 'dotx',
  DOTM = 'dotm',
  DOCB = 'docb',
  PDF = 'pdf',
  CSV = 'csv',
  TSV = 'tsv',
  WLL = 'wll',
  WWL = 'wwl',
  XLS = 'xls',
  XLT = 'xlt',
  XLM = 'xlm',
  XLL_ = 'xll_',
  XLA_ = 'xla_',
  XLA5 = 'xla5',
  XLA8 = 'xla8',
  XLSX = 'xlsx',
  XLSM = 'xlsm',
  XLTX = 'xltx',
  XLTM = 'xltm',
  XLSB = 'xlsb',
  XLA = 'xla',
  XLAM = 'xlam',
  XLL = 'xll',
  XLW = 'xlw',
  PPT = 'ppt',
  POT = 'pot',
  PPS = 'pps',
  PPA = 'ppa',
  PPAM = 'ppam',
  PPTX = 'pptx',
  PPTM = 'pptm',
  POTX = 'potx',
  POTM = 'potm',
  PPSX = 'ppsx',
  PPSM = 'ppsm',
  SLDX = 'sldx',
  SLDM = 'sldm',
  PA = 'pa',
  ACCDA = 'accda',
  ACCDB = 'accdb',
  ACCDE = 'accde',
  ACCDT = 'accdt',
  ACCDR = 'accdr',
  ACCDU = 'accdu',
  MDA = 'mda',
  MDE = 'mde',
  ONE = 'one',
  ECF = 'ecf',
  PUB = 'pub',
  XPS = 'xps',
  RTF = 'rtf',
  TXT = 'txt',
}

export const OFFICE_DOCUMENT_FORMATS = { ...OfficeDocumentFormat };

export interface OfficeDocument extends DigitalDocument {
  format: OfficeDocumentFormat;
}
