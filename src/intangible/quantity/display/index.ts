import {
  Quantity,
  UnitDefinition,
} from '../';
import { MeterUnit } from '../physical/base-units/length';
import { CandelaUnit } from '../physical/base-units/luminous-intensity';
import { HertzUnit } from '../physical/derived-units/frequency';
import {
  CentiMeterUnit,
  FeetUnit,
  InchUnit,
  MilliMeterUnit,
  YardUnit,
} from '../physical/derived-units/length';
import {
  ANSILumensUnit,
  LumensUnit,
  LuxUnit,
  NitsUnit,
} from '../physical/derived-units/luminous-intensity';

export interface PixelUnit extends UnitDefinition {
  name: 'pixel';
  symbol: 'px';
}

export interface ResolutionLength extends Quantity {
  unit: PixelUnit | MilliMeterUnit | CentiMeterUnit | MeterUnit | InchUnit | FeetUnit | YardUnit;
}

export interface Resolution {
  width: ResolutionLength;
  height: ResolutionLength;
  standardName?: 'NTSC' | 'PAL' | 'SD' | 'HD' | 'Full HD' | '2K' | '4K' | '8K';
}

export interface DPIUnit extends UnitDefinition {
  name: 'dots per inch';
  symbol: 'dpi';
}

export interface DPCMUnit extends UnitDefinition {
  name: 'dots per centimeter';
  symbol: 'dpcm';
}

export interface PPIUnit extends UnitDefinition {
  name: 'pixels per inch';
  symbol: 'ppi';
}

export interface PPCMUnit extends UnitDefinition {
  name: 'pixels per centimeter';
  symbol: 'ppcm';
}

export interface MegapixelsUnit extends UnitDefinition {
  name: 'Megapixels';
  symbol: 'MP';
}

export interface GigapixelsUnit extends UnitDefinition {
  name: 'Gigapixels';
  symbol: 'GP';
}

export interface PixelDensity extends Quantity {
  unit: DPIUnit | DPCMUnit | PPIUnit | PPCMUnit | MegapixelsUnit | GigapixelsUnit;
}

export interface Luminosity extends Quantity {
  unit: NitsUnit | LuxUnit | LumensUnit | ANSILumensUnit | CandelaUnit;
}


export interface RefreshRate extends Quantity {
  unit: HertzUnit;
}

export interface ViewingDistance extends Quantity {
  unit: MilliMeterUnit | CentiMeterUnit | MeterUnit | InchUnit | FeetUnit | YardUnit;
}

export interface ImageQuality {
  resolutions: Resolution[];
  pixelDensities?: PixelDensity[];
}

export interface DisplayQuality extends ImageQuality {
  luminosities?: Luminosity[];
  refreshRates?: RefreshRate[];
  viewingDistances?: ViewingDistance[];
}

export interface DiagonalLength extends Quantity {
  unit: MilliMeterUnit | CentiMeterUnit | MeterUnit | InchUnit | FeetUnit;
}

export interface DisplayDefinition {
  displayQuality: DisplayQuality;
  diagonalLength: DiagonalLength;
}
