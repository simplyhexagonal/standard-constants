import { Organization } from "../organization";
import { Person } from "../person";
import { Name } from "../utils/string-types/name";

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

  /**
   * @pattern ^.{0,75}$
   */
  edition?: string;

  /**
   * @pattern ^(ftp|http|https|chrome|:\/\/|\.|@){2,}(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\S*:\w*@)*([a-zA-Z]|(\d{1,3}|\.){7}){1,}(\w|\.{2,}|\.[a-zA-Z]{2,3}|\/|\?|&|:\d|@|=|\/|\(.*\)|#|-|%)*$
   */
  authenticityCertificationUrl?: string;
}
