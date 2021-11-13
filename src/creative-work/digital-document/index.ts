import { FileName } from "../../utils/string-types/file-name";
import { Url } from "../../utils/string-types/url";

export interface DigitalDocument {
  fileName: FileName;

  filePath?: FileName;

  fileUrl?: Url;

  fileSizeBytes?: number;
}
