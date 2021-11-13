import { UnitDefinition } from "../../..";

export interface CandelaUnit extends UnitDefinition {
  name: 'candela';
  symbol: 'cd';
}

export const CANDELA: CandelaUnit = {
  name: 'candela',
  symbol: 'cd',
};
