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

  /**
   * @pattern ^[a-zA-Z0-9]{6,64}$
   */
  taxId?: string;

  /**
   * @pattern ^[a-zA-Z0-9]{6,64}$
   */
  vatId?: string;

  avatarUrls: Url[];

  identification?: {
    /**
     * @pattern ^[a-zA-Z0-9]{6,64}$
     */
    type: string;

    /**
     * @pattern ^.{0,75}$
     */
    value: string;
  };
}
