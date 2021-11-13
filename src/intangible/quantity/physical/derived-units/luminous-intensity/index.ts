import { UnitDefinition } from "../../..";

export interface NitsUnit extends UnitDefinition {
  name: 'nits';
  symbol: 'nt';
}

export interface LuxUnit extends UnitDefinition {
  name: 'lux';
  symbol: 'lx';
}

export interface LumensUnit extends UnitDefinition {
  name: 'lumens';
  symbol: 'lm';
}

export interface ANSILumensUnit extends UnitDefinition {
  name: 'ANSI lumens';
  symbol: 'lm (ANSI)';
}

export const NITS: NitsUnit = {
  name: 'nits',
  symbol: 'nt',
}

export const LUX: LuxUnit = {
  name: 'lux',
  symbol: 'lx',
}

export const LUMENS: LumensUnit = {
  name: 'lumens',
  symbol: 'lm',
}

export const ANSI_LUMENS: ANSILumensUnit = {
  name: 'ANSI lumens',
  symbol: 'lm (ANSI)',
}
