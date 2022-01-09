import { Description } from "../../utils/string-types/description";
import { Descriptor } from "../../utils/string-types/descriptor";
import { Keyword } from "../../utils/string-types/keyword";
import { UrlSlug } from "../../utils/string-types/url-slug";

export interface Tag {
  tag: Keyword;

  slug: UrlSlug;

  title: Descriptor;

  description: Description;
}
