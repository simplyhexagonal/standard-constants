import {
  ColorCmykString,
  ColorHexString,
  ColorHslString,
  ColorRgbaString,
  ColorRgbString,
} from "../../utils/string-types/color";

export interface HexColor {
  name?: string;

  value: ColorHexString;
}

export interface RGBColor {
  name?: string;

  value: ColorRgbString;
}

export interface RGBAColor {
  name?: string;

  value: ColorRgbaString;
}

export interface HSLColor {
  name?: string;

  value: ColorHslString;
}

export interface CYMKColor {
  name?: string;

  value: ColorCmykString;
}
