import { CountryCode } from "../place/country";
import { Descriptor } from "../utils/string-types/descriptor";
import { IdString } from "../utils/string-types/id";
import { Url } from "../utils/string-types/url";

export interface CreativeWork {
  name: Descriptor;

  publishDate?: Date;

  flaggedAt?: Date;

  disputedAt?: Date;

  authors: IdString[]; // Person or Organization

  contributors?: IdString[]; // Person or Organization

  researchers?: IdString[]; // Person or Organization

  editors?: IdString[]; // Person or Organization

  publishers?: IdString[]; // Person or Organization

  licensors?: IdString[]; // Person or Organization

  copyrightHolder?: IdString[]; // Person or Organization

  copyrightYear?: number;

  copyrightNotice?: string;

  edition?: Descriptor;

  authenticityCertificationUrl?: Url;

  countryOfOrigin?: CountryCode;

  tags: IdString[]; // Tag
}
