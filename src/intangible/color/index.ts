export interface HexColor {
  name?: string;

  /**
   * @pattern ^#(?:[0-9a-fA-F]{3,4}){1,2}$
   */
  value: string;
}

export interface RGBColor {
  name?: string;

  /**
   * @pattern ^([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5])$
   */
  value: string;
}

export interface RGBAColor {
  name?: string;

  /**
   * @pattern ^([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|1{0,1}[0-9][0-9]|2[0-4][0-9]|25[0-5])$
   */
  value: string;
}

export interface HSLColor {
  name?: string;

  /**
   * @pattern ^([0-9]|[12]{0,1}[0-9][0-9]|3[0-5][0-9]),([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%$
   */
  value: string;
}

export interface CYMKColor {
  name?: string;

  /**
   * @pattern ^([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%,([0-9]{0,1}[0-9]|100)%$
   */
  value: string;
}
