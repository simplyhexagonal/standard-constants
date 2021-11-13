/**
 * @pattern ^#(?:[0-9a-fA-F]{3,4}){1,2}$
 */
export type ColorHexString = string;

/**
 * @pattern ^([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5])$
 */
export type ColorRgbString = string;

/**
 * @pattern ^([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5])$
 */
export type ColorRgbaString = string;

/**
 * @pattern ^([0-9]|[12]{0,1}[0-9][0-9]|3[0-5][0-9]),([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%$
 */
export type ColorHslString = string;

/**
 * @pattern ^([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%$
 */
export type ColorCmykString = string;
