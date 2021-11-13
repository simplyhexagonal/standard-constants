import { Organization } from "../organization";
import { Person } from "../person";
import { CountryCode } from "../place/country";
import { Descriptor } from "../utils/string-types/descriptor";
import { Name } from "../utils/string-types/name";
import { Url } from "../utils/string-types/url";

export interface CreativeWork {
  name: Name;

  publishDate?: Date;

  flaggedAt?: Date;

  disputedAt?: Date;

  authors: (Person | Organization)[];

  contributors?: (Person | Organization)[];

  researchers?: (Person | Organization)[];

  editors?: (Person | Organization)[];

  publishers?: (Person | Organization)[];

  licensors?: (Person | Organization)[];

  copyrightHolder?: (Person | Organization)[];

  copyrightYear?: number;

  copyrightNotice?: string;

  edition?: Descriptor;

  authenticityCertificationUrl?: Url;

  countryOfOrigin?: CountryCode;
}
