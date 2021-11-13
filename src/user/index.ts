import { Organization } from "../organization";
import { Person } from "../person";
import { PasswordHash } from "../utils/string-types/password-hash";
import { Username } from "../utils/string-types/username";

export interface User extends Person, Organization {
  username: Username;

  passwordHash: PasswordHash;

  passwordResetToken?: PasswordHash;

  confirmed: boolean;

  twoFactorEnabled: boolean;

  recoveryEmailIndex?: number;
}
