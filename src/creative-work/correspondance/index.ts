import { Abstract } from "../../utils/string-types/abstract";
import { Content } from "../../utils/string-types/content";
import { Descriptor } from "../../utils/string-types/descriptor";
import { IdString } from "../../utils/string-types/id";

export interface CorrespondanceMetadata {
  sender: IdString; // Person, Organization, or User

  subject: Descriptor;

  recipients: IdString[]; // Person, Organization, or User

  sentAt: Date;
}

export interface ShortCorrespondance extends CorrespondanceMetadata {
  body: Abstract;
}

export interface Correspondance extends CorrespondanceMetadata {
  body: Content;
}