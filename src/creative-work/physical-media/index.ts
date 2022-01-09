import { MeterUnit } from "../../intangible/quantity/physical/base-units/length";
import {
  CentiMeterUnit,
  FeetUnit,
  InchUnit,
  MilliMeterUnit,
  YardUnit,
} from "../../intangible/quantity/physical/derived-units/length";
import { Descriptor } from "../../utils/string-types/descriptor";

export interface PhysicalMedia {
  media: Descriptor[];
  techniques: Descriptor[];
  dimensions?: {
    width: MilliMeterUnit | CentiMeterUnit | MeterUnit | InchUnit | FeetUnit | YardUnit;
    height: MilliMeterUnit | CentiMeterUnit | MeterUnit | InchUnit | FeetUnit | YardUnit;
    depth: MilliMeterUnit | CentiMeterUnit | MeterUnit | InchUnit | FeetUnit | YardUnit;
  },
}
