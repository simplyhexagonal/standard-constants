import { Address } from "../intangible/contact-information";
import { Personhood } from "../intangible/personhood";
import { Person } from "../person";

export interface Organization extends Personhood {
  /**
   * @pattern ^[A-Za-z0-9\.\u0041-\u005A\u0061-\u007A\u008C\u009C\u00C0-\u018C\u018E\u0190-\u019A\u019C-\u01A5\u01AC-\u01B6\u01C4-\u01ED\u01F0-\u021B\u021E-\u0220\u0222-\u0254\u0256\u0257\u025B\u0260\u0265\u0268\u026B\u026F\u0271\u0272\u0275\u027D\u0288\u0289\u028B\u028C\u1D79\u1D7D\u1E00-\u1E9B\u1E9E\u1EA0-\u1EF9\u1EFE\u1EFF\u2184\u24B6-\u24E9\u2C60-\u2C6C\u2C6E\u2C6F\u2C72\u2C73\u2C75-\u2C76\u2C7E-\u2C7F\uA728-\uA729\uA732-\uA75B\uA75E-\uA763\uA779-\uA787\uA78D\uA790\uA791\uA7A0-\uA7A9\uFF21-\uFF3A\uFF41-\uFF5A][A-Za-z0-9\.\u0041-\u005A\u0061-\u007A\u008C\u009C\u00C0-\u018C\u018E\u0190-\u019A\u019C-\u01A5\u01AC-\u01B6\u01C4-\u01ED\u01F0-\u021B\u021E-\u0220\u0222-\u0254\u0256\u0257\u025B\u0260\u0265\u0268\u026B\u026F\u0271\u0272\u0275\u027D\u0288\u0289\u028B\u028C\u1D79\u1D7D\u1E00-\u1E9B\u1E9E\u1EA0-\u1EF9\u1EFE\u1EFF\u2184\u24B6-\u24E9\u2C60-\u2C6C\u2C6E\u2C6F\u2C72\u2C73\u2C75-\u2C76\u2C7E-\u2C7F\uA728-\uA729\uA732-\uA75B\uA75E-\uA763\uA779-\uA787\uA78D\uA790\uA791\uA7A0-\uA7A9\uFF21-\uFF3A\uFF41-\uFF5A\'\-]+( [A-Za-z0-9\.\u0041-\u005A\u0061-\u007A\u008C\u009C\u00C0-\u018C\u018E\u0190-\u019A\u019C-\u01A5\u01AC-\u01B6\u01C4-\u01ED\u01F0-\u021B\u021E-\u0220\u0222-\u0254\u0256\u0257\u025B\u0260\u0265\u0268\u026B\u026F\u0271\u0272\u0275\u027D\u0288\u0289\u028B\u028C\u1D79\u1D7D\u1E00-\u1E9B\u1E9E\u1EA0-\u1EF9\u1EFE\u1EFF\u2184\u24B6-\u24E9\u2C60-\u2C6C\u2C6E\u2C6F\u2C72\u2C73\u2C75-\u2C76\u2C7E-\u2C7F\uA728-\uA729\uA732-\uA75B\uA75E-\uA763\uA779-\uA787\uA78D\uA790\uA791\uA7A0-\uA7A9\uFF21-\uFF3A\uFF41-\uFF5A\'\-]|[A-Za-z0-9\.\u0041-\u005A\u0061-\u007A\u008C\u009C\u00C0-\u018C\u018E\u0190-\u019A\u019C-\u01A5\u01AC-\u01B6\u01C4-\u01ED\u01F0-\u021B\u021E-\u0220\u0222-\u0254\u0256\u0257\u025B\u0260\u0265\u0268\u026B\u026F\u0271\u0272\u0275\u027D\u0288\u0289\u028B\u028C\u1D79\u1D7D\u1E00-\u1E9B\u1E9E\u1EA0-\u1EF9\u1EFE\u1EFF\u2184\u24B6-\u24E9\u2C60-\u2C6C\u2C6E\u2C6F\u2C72\u2C73\u2C75-\u2C76\u2C7E-\u2C7F\uA728-\uA729\uA732-\uA75B\uA75E-\uA763\uA779-\uA787\uA78D\uA790\uA791\uA7A0-\uA7A9\uFF21-\uFF3A\uFF41-\uFF5A\'\-]){0,245}$
   */
  department?: string;

  dissolutionDate?: Date;

  foundingDate?: Date;

  founder?: Person;

  /**
   * @pattern ^[a-zA-Z0-9]{6,64}$
   */
  globalLocationNumber?: string;

  legalName: string;

  /**
   * @pattern ^[a-zA-Z0-9]{6,64}$
   */
  leiCode?: string;

  location: Address;

  numberOfEmployees?: number;

  parentOrganization?: Organization;
}
