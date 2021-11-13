export interface UnitDefinition {
  name: string;
  symbol: string;
}

export interface Quantity {
  value: Number;
  unit: UnitDefinition;
}
