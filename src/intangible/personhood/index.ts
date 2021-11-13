import { Descriptor } from "../../utils/string-types/descriptor";
import { IdString } from "../../utils/string-types/id";
import { Url } from "../../utils/string-types/url";
import { Brand } from "../brand";
import { Address, Email, Telephone } from "../contact-information";
import { Language } from "../language";

export interface Personhood {
  addresses: Address[];

  brands: Brand[];

  /**
   * @minItems 1
   */
  emails: Email[];

  languages: Language[];

  telephones: Telephone[];

  taxId?: IdString;

  vatId?: IdString;

  avatarUrls: Url[];

  identification?: {
    type: IdString;

    value: Descriptor;
  };
}
