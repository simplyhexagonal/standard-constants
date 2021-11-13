import { DigitalDocument } from "..";

enum ArchiveDocumentFormat {
  A = 'a',
  AR = 'ar',
  CPIO = 'cpio',
  SHAR = 'shar',
  LBR = 'lbr',
  ISO = 'iso',
  MAR = 'mar',
  SBX = 'sbx',
  TAR = 'tar',
}

export const ARCHIVE_DOCUMENT_FORMATS = { ...ArchiveDocumentFormat };

export interface ArchiveDocument extends DigitalDocument {
  format: ArchiveDocumentFormat;
}
