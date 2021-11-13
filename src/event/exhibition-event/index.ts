import { CreativeWork } from "../../creative-work";
import { Organization } from "../../organization";
import { Person } from "../../person";
import { Abstract } from "../../utils/string-types/abstract";
import { Descriptor } from "../../utils/string-types/descriptor";

export interface ExhibitionEvent {
  about?: Abstract;

  intendedAudience?: Descriptor;

  authors?: (Person | Organization)[];

  performers?: (Person | Organization)[];

  workFeatured?: CreativeWork;

  workPerformed?: CreativeWork;
}
