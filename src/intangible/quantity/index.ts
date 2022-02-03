export interface UnitDefinition {
  name: string;
  symbol: string;
}

export interface Quantity<U = UnitDefinition> {
  value: string;
  unit: U;
}
