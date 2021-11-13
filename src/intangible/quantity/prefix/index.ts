import { UnitDefinition } from '../';

export interface YottaPrefix extends UnitDefinition {
  name: 'yotta',
  symbol: 'Y',
}

export interface ZettaPrefix extends UnitDefinition {
  name: 'zetta',
  symbol: 'Z',
}

export interface ExaPrefix extends UnitDefinition {
  name: 'exa',
  symbol: 'E',
}

export interface PetaPrefix extends UnitDefinition {
  name: 'peta',
  symbol: 'P',
}

export interface TeraPrefix extends UnitDefinition {
  name: 'tera',
  symbol: 'T',
}

export interface GigaPrefix extends UnitDefinition {
  name: 'giga',
  symbol: 'G',
}

export interface MegaPrefix extends UnitDefinition {
  name: 'mega',
  symbol: 'M',
}

export interface KiloPrefix extends UnitDefinition {
  name: 'kilo',
  symbol: 'k',
}

export interface HectoPrefix extends UnitDefinition {
  name: 'hecto',
  symbol: 'h',
}

export interface DekaPrefix extends UnitDefinition {
  name: 'deka',
  symbol: 'da',
}

export interface DeciPrefix extends UnitDefinition {
  name: 'deci',
  symbol: 'd',
}

export interface CentiPrefix extends UnitDefinition {
  name: 'centi',
  symbol: 'c',
}

export interface MilliPrefix extends UnitDefinition {
  name: 'milli',
  symbol: 'm',
}

export interface MicroPrefix extends UnitDefinition {
  name: 'micro',
  symbol: 'µ',
}

export interface NanoPrefix extends UnitDefinition {
  name: 'nano',
  symbol: 'n',
}

export interface PicoPrefix extends UnitDefinition {
  name: 'pico',
  symbol: 'p',
}

export interface FemtoPrefix extends UnitDefinition {
  name: 'femto',
  symbol: 'f',
}

export interface AttoPrefix extends UnitDefinition {
  name: 'atto',
  symbol: 'a',
}

export interface ZeptoPrefix extends UnitDefinition {
  name: 'zepto',
  symbol: 'z',
}

export interface YoctoPrefix extends UnitDefinition {
  name: 'yocto',
  symbol: 'y',
}


export interface PrefixDefinition {
  factor: number;
}


export const YOTTA: PrefixDefinition & YottaPrefix = {
  factor: 1e+24,
  name: 'yotta',
  symbol: 'Y',
}

export const ZETTA: PrefixDefinition & ZettaPrefix = {
  factor: 1e+21,
  name: 'zetta',
  symbol: 'Z',
}

export const EXA: PrefixDefinition & ExaPrefix = {
  factor: 1e+18,
  name: 'exa',
  symbol: 'E',
}

export const PETA: PrefixDefinition & PetaPrefix = {
  factor: 1e+15,
  name: 'peta',
  symbol: 'P',
}

export const TERA: PrefixDefinition & TeraPrefix = {
  factor: 1e+12,
  name: 'tera',
  symbol: 'T',
}

export const GIGA: PrefixDefinition & GigaPrefix = {
  factor: 1e+9,
  name: 'giga',
  symbol: 'G',
}

export const MEGA: PrefixDefinition & MegaPrefix = {
  factor: 1e+6,
  name: 'mega',
  symbol: 'M',
}

export const KILO: PrefixDefinition & KiloPrefix = {
  factor: 1e+3,
  name: 'kilo',
  symbol: 'k',
}

export const HECTO: PrefixDefinition & HectoPrefix = {
  factor: 1e+2,
  name: 'hecto',
  symbol: 'h',
}

export const DEKA: PrefixDefinition & DekaPrefix = {
  factor: 1e+1,
  name: 'deka',
  symbol: 'da',
}

export const DECI: PrefixDefinition & DeciPrefix = {
  factor: 1e-1,
  name: 'deci',
  symbol: 'd',
}

export const CENTI: PrefixDefinition & CentiPrefix = {
  factor: 1e-2,
  name: 'centi',
  symbol: 'c',
}

export const MILLI: PrefixDefinition & MilliPrefix = {
  factor: 1e-3,
  name: 'milli',
  symbol: 'm',
}

export const MICRO: PrefixDefinition & MicroPrefix = {
  factor: 1e-6,
  name: 'micro',
  symbol: 'µ',
}

export const NANO: PrefixDefinition & NanoPrefix = {
  factor: 1e-9,
  name: 'nano',
  symbol: 'n',
}

export const PICO: PrefixDefinition & PicoPrefix = {
  factor: 1e-12,
  name: 'pico',
  symbol: 'p',
}

export const FEMTO: PrefixDefinition & FemtoPrefix = {
  factor: 1e-15,
  name: 'femto',
  symbol: 'f',
}

export const ATTO: PrefixDefinition & AttoPrefix = {
  factor: 1e-18,
  name: 'atto',
  symbol: 'a',
}

export const ZEPTO: PrefixDefinition & ZeptoPrefix = {
  factor: 1e-21,
  name: 'zepto',
  symbol: 'z',
}

export const YOCTO: PrefixDefinition & YoctoPrefix = {
  factor: 1e-24,
  name: 'yocto',
  symbol: 'y',
}

