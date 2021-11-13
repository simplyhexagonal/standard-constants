import { UnitDefinition } from '../../../';

export interface SecondUnit extends UnitDefinition {
  name: 'second';
  symbol: 's';
}

export const SECOND: SecondUnit = {
  name: 'second',
  symbol: 's',
};
