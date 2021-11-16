import { ExtendedName } from "../../utils/string-types/name";
import { Url } from "../../utils/string-types/url";
import { Color } from "../color";

export interface Brand {
  name: ExtendedName;

  url: Url;

  description: string;

  alternateName: ExtendedName;

  logoUrl: Url;

  /**
   * @pattern ^.{0,128}$
   */
  slogan: string;

  typefaces: ExtendedName[];

  colorPalette: Color[];
}

const e: Color = {};
