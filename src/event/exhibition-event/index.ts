import { CreativeWork } from "../../creative-work";
import { Organization } from "../../organization";
import { Person } from "../../person";

export interface ExhibitionEvent {
  /**
   * @pattern ^.{0,5000}$
   */
  about?: string;

  /**
   * @pattern ^.{0,75}$
   */
  intendedAudience?: string;

  authors?: (Person | Organization)[];

  performers?: (Person | Organization)[];

  workFeatured?: CreativeWork;

  workPerformed?: CreativeWork;
}
