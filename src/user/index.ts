import { Organization } from "../organization";
import { Person } from "../person";

export interface User extends Person, Organization {
  /**
   * @pattern ^[a-zA-Z0-9_-]{3,64}$
   */
  username: string;

  /**
   * @pattern ^[a-zA-Z0-9.@!#$%&'*+/=?^_`{|}~-]{4,256}$
   */
  passwordHash: string;

  passwordResetToken?: string | null;

  confirmed: boolean;

  twoFactorEnabled: boolean;

  recoveryEmailIndex?: number;
}
