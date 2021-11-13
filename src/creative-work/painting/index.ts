import { Descriptor } from "../../utils/string-types/descriptor";

export interface Painting {
  materials: Descriptor[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  },
}
