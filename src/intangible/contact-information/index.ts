import { CountryCode } from "../../place/country";
import { StellarBody } from "../../place/stellar-body";
import { Descriptor } from "../../utils/string-types/descriptor";
import { EmailString } from "../../utils/string-types/email";
import { ExtendedName } from "../../utils/string-types/name";
import { PhoneNumber } from "../../utils/string-types/phone-number";
import { PostalCode } from "../../utils/string-types/postal-code";

export interface StreetAddress {
  firstLine: Descriptor;

  secondLine?: Descriptor;
}

export interface Address {
  descriptor: Descriptor;

  stellarBody?: StellarBody;

  country: CountryCode | '-';

  region: ExtendedName;

  locality: ExtendedName;

  postalCode: PostalCode;

  streetAddress: StreetAddress;
}

export interface Email {
  descriptor: Descriptor;

  address: EmailString;
}

export interface Telephone {
  descriptor: Descriptor;

  number: PhoneNumber;
}
