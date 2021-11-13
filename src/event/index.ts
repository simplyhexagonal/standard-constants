import { ImageDocument } from "../creative-work/digital-document/image";
import { Brand } from "../intangible/brand";
import { Address } from "../intangible/contact-information";
import { Organization } from "../organization";
import { Person } from "../person";
import { ExtendedName } from "../utils/string-types/name";

export enum EventStatus {
  PROPOSED = "proposed",
  APPROVED = "approved",
  ORGANIZED = "organized",
  SCHEDULED = "scheduled",
  POSTPONED = "postponed",
  RESCHEDULED = "rescheduled",
  CANCELLED = "cancelled",
}

export interface Event {
  name: string;

  description: string;

  images: ImageDocument[];

  date: Date;

  status?: EventStatus;

  statusChangeDate?: Date;

  brands: Brand[];

  inauguration?: Date;

  endDate?: Date;

  venue?: ExtendedName;

  address?: Address;

  organizers?: (Organization | Person)[];

  sponsors?: (Organization | Person)[];

  maximumAttendeeCapacity?: number;
}
