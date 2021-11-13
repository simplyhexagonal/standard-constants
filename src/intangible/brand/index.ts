import { ExtendedName } from "../../utils/string-types/name";
import { Url } from "../../utils/string-types/url";
import { CYMKColor, HexColor, HSLColor, RGBAColor, RGBColor } from "../color";

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

  colorPalette: HexColor[] | RGBColor[] | RGBAColor[] | HSLColor[] | CYMKColor[];
}
