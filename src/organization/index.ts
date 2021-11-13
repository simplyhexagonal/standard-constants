import { Address } from "../intangible/contact-information";
import { Personhood } from "../intangible/personhood";
import { Person } from "../person";
import { IdString } from "../utils/string-types/id";
import { ExtendedName } from "../utils/string-types/name";

export interface Organization extends Personhood {
  department?: ExtendedName;

  dissolutionDate?: Date;

  foundingDate?: Date;

  founder?: Person;

  globalLocationNumber?: IdString;

  legalName: ExtendedName;

  leiCode?: IdString;

  location: Address;

  numberOfEmployees?: number;

  parentOrganization?: IdString;
}
