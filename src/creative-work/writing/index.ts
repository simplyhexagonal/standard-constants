import { Abstract } from "../../utils/string-types/abstract";
import { Content } from "../../utils/string-types/content";
import { Description } from "../../utils/string-types/description";
import { Descriptor } from "../../utils/string-types/descriptor";

export interface Writing {
  title: Descriptor;

  description?: Description;

  abstract?: Abstract;

  wordCount?: number;

  audiences?: Descriptor[];

  genres?: Descriptor[];

  contents: Content[];
}