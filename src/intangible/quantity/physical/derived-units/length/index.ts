import { UnitDefinition } from '../../../';
import { MeterUnit } from '../../base-units/length'
import {
  YottaPrefix,
  ZettaPrefix,
  ExaPrefix,
  PetaPrefix,
  TeraPrefix,
  GigaPrefix,
  MegaPrefix,
  KiloPrefix,
  HectoPrefix,
  DekaPrefix,
  DeciPrefix,
  CentiPrefix,
  MilliPrefix,
  MicroPrefix,
  NanoPrefix,
  PicoPrefix,
  FemtoPrefix,
  AttoPrefix,
  ZeptoPrefix,
  YoctoPrefix,
} from '../../../prefix';

export interface YottaMeterUnit extends UnitDefinition {
  name: `${YottaPrefix['name']}${MeterUnit['name']}`;
  symbol: `${YottaPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface ZettaMeterUnit extends UnitDefinition {
  name: `${ZettaPrefix['name']}${MeterUnit['name']}`;
  symbol: `${ZettaPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface ExaMeterUnit extends UnitDefinition {
  name: `${ExaPrefix['name']}${MeterUnit['name']}`;
  symbol: `${ExaPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface PetaMeterUnit extends UnitDefinition {
  name: `${PetaPrefix['name']}${MeterUnit['name']}`;
  symbol: `${PetaPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface TeraMeterUnit extends UnitDefinition {
  name: `${TeraPrefix['name']}${MeterUnit['name']}`;
  symbol: `${TeraPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface GigaMeterUnit extends UnitDefinition {
  name: `${GigaPrefix['name']}${MeterUnit['name']}`;
  symbol: `${GigaPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface MegaMeterUnit extends UnitDefinition {
  name: `${MegaPrefix['name']}${MeterUnit['name']}`;
  symbol: `${MegaPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface KiloMeterUnit extends UnitDefinition {
  name: `${KiloPrefix['name']}${MeterUnit['name']}`;
  symbol: `${KiloPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface HectoMeterUnit extends UnitDefinition {
  name: `${HectoPrefix['name']}${MeterUnit['name']}`;
  symbol: `${HectoPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface DekaMeterUnit extends UnitDefinition {
  name: `${DekaPrefix['name']}${MeterUnit['name']}`;
  symbol: `${DekaPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface DeciMeterUnit extends UnitDefinition {
  name: `${DeciPrefix['name']}${MeterUnit['name']}`;
  symbol: `${DeciPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface CentiMeterUnit extends UnitDefinition {
  name: `${CentiPrefix['name']}${MeterUnit['name']}`;
  symbol: `${CentiPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface MilliMeterUnit extends UnitDefinition {
  name: `${MilliPrefix['name']}${MeterUnit['name']}`;
  symbol: `${MilliPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface MicroMeterUnit extends UnitDefinition {
  name: `${MicroPrefix['name']}${MeterUnit['name']}`;
  symbol: `${MicroPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface NanoMeterUnit extends UnitDefinition {
  name: `${NanoPrefix['name']}${MeterUnit['name']}`;
  symbol: `${NanoPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface PicoMeterUnit extends UnitDefinition {
  name: `${PicoPrefix['name']}${MeterUnit['name']}`;
  symbol: `${PicoPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface FemtoMeterUnit extends UnitDefinition {
  name: `${FemtoPrefix['name']}${MeterUnit['name']}`;
  symbol: `${FemtoPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface AttoMeterUnit extends UnitDefinition {
  name: `${AttoPrefix['name']}${MeterUnit['name']}`;
  symbol: `${AttoPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface ZeptoMeterUnit extends UnitDefinition {
  name: `${ZeptoPrefix['name']}${MeterUnit['name']}`;
  symbol: `${ZeptoPrefix['symbol']}${MeterUnit['symbol']}`;
}

export interface YoctoMeterUnit extends UnitDefinition {
  name: `${YoctoPrefix['name']}${MeterUnit['name']}`;
  symbol: `${YoctoPrefix['symbol']}${MeterUnit['symbol']}`;
}


export const YOTTAMETER: YottaMeterUnit = {
  name: 'yottameter',
  symbol: 'Ym',
}

export const ZETTAMETER: ZettaMeterUnit = {
  name: 'zettameter',
  symbol: 'Zm',
}

export const EXAMETER: ExaMeterUnit = {
  name: 'exameter',
  symbol: 'Em',
}

export const PETAMETER: PetaMeterUnit = {
  name: 'petameter',
  symbol: 'Pm',
}

export const TERAMETER: TeraMeterUnit = {
  name: 'terameter',
  symbol: 'Tm',
}

export const GIGAMETER: GigaMeterUnit = {
  name: 'gigameter',
  symbol: 'Gm',
}

export const MEGAMETER: MegaMeterUnit = {
  name: 'megameter',
  symbol: 'Mm',
}

export const KILOMETER: KiloMeterUnit = {
  name: 'kilometer',
  symbol: 'km',
}

export const HECTOMETER: HectoMeterUnit = {
  name: 'hectometer',
  symbol: 'hm',
}

export const DEKAMETER: DekaMeterUnit = {
  name: 'dekameter',
  symbol: 'dam',
}

export const DECIMETER: DeciMeterUnit = {
  name: 'decimeter',
  symbol: 'dm',
}

export const CENTIMETER: CentiMeterUnit = {
  name: 'centimeter',
  symbol: 'cm',
}

export const MILLIMETER: MilliMeterUnit = {
  name: 'millimeter',
  symbol: 'mm',
}

export const MICROMETER: MicroMeterUnit = {
  name: 'micrometer',
  symbol: 'µm',
}

export const NANOMETER: NanoMeterUnit = {
  name: 'nanometer',
  symbol: 'nm',
}

export const PICOMETER: PicoMeterUnit = {
  name: 'picometer',
  symbol: 'pm',
}

export const FEMTOMETER: FemtoMeterUnit = {
  name: 'femtometer',
  symbol: 'fm',
}

export const ATTOMETER: AttoMeterUnit = {
  name: 'attometer',
  symbol: 'am',
}

export const ZEPTOMETER: ZeptoMeterUnit = {
  name: 'zeptometer',
  symbol: 'zm',
}

export const YOCTOMETER: YoctoMeterUnit = {
  name: 'yoctometer',
  symbol: 'ym',
}


export interface InchUnit extends UnitDefinition {
  name: 'inch';
  symbol: 'in';
}

export interface FeetUnit extends UnitDefinition {
  name: 'feet';
  symbol: 'ft';
}

export interface YardUnit extends UnitDefinition {
  name: 'yard';
  symbol: 'yd';
}

export const INCH: InchUnit = {
  name: 'inch',
  symbol: 'in',
}

export const FEET: FeetUnit = {
  name: 'feet',
  symbol: 'ft',
}

export const YARD: YardUnit = {
  name: 'yard',
  symbol: 'yd',
}
