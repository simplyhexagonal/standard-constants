import { Brand } from "../brand";
import { Address, Email, Telephone } from "../contact-information";
import { Language } from "../language";

export interface Personhood {
  addresses: Address[];

  brands: Brand[];

  /**
   * @items {"minimum": 1}
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

  /**
   * @items {"type": "string", "pattern": "^(ftp|http|https|chrome|:\/\/|\.|@){2,}(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\S*:\w*@)*([a-zA-Z]|(\d{1,3}|\.){7}){1,}(\w|\.{2,}|\.[a-zA-Z]{2,3}|\/|\?|&|:\d|@|=|\/|\(.*\)|#|-|%)*$"}
   */
  avatarUrls: string[];

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
