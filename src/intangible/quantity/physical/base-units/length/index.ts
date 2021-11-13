import { UnitDefinition } from '../../../';

export interface MeterUnit extends UnitDefinition {
  name: 'meter';
  symbol: 'm';
}

export const METER: MeterUnit = {
  name: 'meter',
  symbol: 'm',
};
