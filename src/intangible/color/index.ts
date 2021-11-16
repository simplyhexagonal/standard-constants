import {
  ColorCmykString,
  ColorHexString,
  ColorHslString,
  ColorRgbaString,
  ColorRgbString,
} from "../../utils/string-types/color";

export interface HexColor {
  hexColorValue?: ColorHexString;
}

export interface RGBColor {
  rgbColorValue?: ColorRgbString;
}

export interface RGBAColor {
  rgbaColorValue?: ColorRgbaString;
}

export interface HSLColor {
  hslColorValue?: ColorHslString;
}

export interface CYMKColor {
  cymkColorValue?: ColorCmykString;
}

export interface Color extends HexColor, RGBColor, RGBAColor, HSLColor, CYMKColor {
  name?: string;
}
