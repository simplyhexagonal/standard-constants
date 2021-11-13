import { Address } from "../intangible/contact-information";
import { Personhood } from "../intangible/personhood";
import { CountryCode } from "../place/country";
import { ExtendedName, Name } from "../utils/string-types/name";

export interface Person extends Personhood {
  birthDate?: Date;

  birthPlace?: Address;

  deathDate?: Date;

  givenName?: Name;

  additionalName?: Name;

  familyName?: Name;

  jobTitle?: ExtendedName;

  nationalities?: CountryCode[];
}
