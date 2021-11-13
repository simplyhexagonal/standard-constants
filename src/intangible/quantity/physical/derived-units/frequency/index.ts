import { UnitDefinition } from '../../../';
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

export interface HertzUnit extends UnitDefinition {
  name: 'hertz';
  symbol: 'Hz';
}

export interface YottaHertzUnit extends UnitDefinition {
  name: `${YottaPrefix['name']}${HertzUnit['name']}`;
  symbol: `${YottaPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface ZettaHertzUnit extends UnitDefinition {
  name: `${ZettaPrefix['name']}${HertzUnit['name']}`;
  symbol: `${ZettaPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface ExaHertzUnit extends UnitDefinition {
  name: `${ExaPrefix['name']}${HertzUnit['name']}`;
  symbol: `${ExaPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface PetaHertzUnit extends UnitDefinition {
  name: `${PetaPrefix['name']}${HertzUnit['name']}`;
  symbol: `${PetaPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface TeraHertzUnit extends UnitDefinition {
  name: `${TeraPrefix['name']}${HertzUnit['name']}`;
  symbol: `${TeraPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface GigaHertzUnit extends UnitDefinition {
  name: `${GigaPrefix['name']}${HertzUnit['name']}`;
  symbol: `${GigaPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface MegaHertzUnit extends UnitDefinition {
  name: `${MegaPrefix['name']}${HertzUnit['name']}`;
  symbol: `${MegaPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface KiloHertzUnit extends UnitDefinition {
  name: `${KiloPrefix['name']}${HertzUnit['name']}`;
  symbol: `${KiloPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface HectoHertzUnit extends UnitDefinition {
  name: `${HectoPrefix['name']}${HertzUnit['name']}`;
  symbol: `${HectoPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface DekaHertzUnit extends UnitDefinition {
  name: `${DekaPrefix['name']}${HertzUnit['name']}`;
  symbol: `${DekaPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface DeciHertzUnit extends UnitDefinition {
  name: `${DeciPrefix['name']}${HertzUnit['name']}`;
  symbol: `${DeciPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface CentiHertzUnit extends UnitDefinition {
  name: `${CentiPrefix['name']}${HertzUnit['name']}`;
  symbol: `${CentiPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface MilliHertzUnit extends UnitDefinition {
  name: `${MilliPrefix['name']}${HertzUnit['name']}`;
  symbol: `${MilliPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface MicroHertzUnit extends UnitDefinition {
  name: `${MicroPrefix['name']}${HertzUnit['name']}`;
  symbol: `${MicroPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface NanoHertzUnit extends UnitDefinition {
  name: `${NanoPrefix['name']}${HertzUnit['name']}`;
  symbol: `${NanoPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface PicoHertzUnit extends UnitDefinition {
  name: `${PicoPrefix['name']}${HertzUnit['name']}`;
  symbol: `${PicoPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface FemtoHertzUnit extends UnitDefinition {
  name: `${FemtoPrefix['name']}${HertzUnit['name']}`;
  symbol: `${FemtoPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface AttoHertzUnit extends UnitDefinition {
  name: `${AttoPrefix['name']}${HertzUnit['name']}`;
  symbol: `${AttoPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface ZeptoHertzUnit extends UnitDefinition {
  name: `${ZeptoPrefix['name']}${HertzUnit['name']}`;
  symbol: `${ZeptoPrefix['symbol']}${HertzUnit['symbol']}`;
}

export interface YoctoHertzUnit extends UnitDefinition {
  name: `${YoctoPrefix['name']}${HertzUnit['name']}`;
  symbol: `${YoctoPrefix['symbol']}${HertzUnit['symbol']}`;
}

export const HERTZ: HertzUnit = {
  name: 'hertz',
  symbol: 'Hz',
};

export const YOTTAHERTZ: YottaHertzUnit = {
  name: 'yottahertz',
  symbol: 'YHz',
};

export const ZETTAHERTZ: ZettaHertzUnit = {
  name: 'zettahertz',
  symbol: 'ZHz',
};

export const EXAHERTZ: ExaHertzUnit = {
  name: 'exahertz',
  symbol: 'EHz',
};

export const PETAHERTZ: PetaHertzUnit = {
  name: 'petahertz',
  symbol: 'PHz',
};

export const TERAHERTZ: TeraHertzUnit = {
  name: 'terahertz',
  symbol: 'THz',
};

export const GIGAHERTZ: GigaHertzUnit = {
  name: 'gigahertz',
  symbol: 'GHz',
};

export const MEGAHERTZ: MegaHertzUnit = {
  name: 'megahertz',
  symbol: 'MHz',
};

export const KILOHERTZ: KiloHertzUnit = {
  name: 'kilohertz',
  symbol: 'kHz',
};

export const HECTOHERTZ: HectoHertzUnit = {
  name: 'hectohertz',
  symbol: 'hHz',
};

export const DEKAHERTZ: DekaHertzUnit = {
  name: 'dekahertz',
  symbol: 'daHz',
};

export const DECIHERTZ: DeciHertzUnit = {
  name: 'decihertz',
  symbol: 'dHz',
};

export const CENTIHERTZ: CentiHertzUnit = {
  name: 'centihertz',
  symbol: 'cHz',
};

export const MILLIHERTZ: MilliHertzUnit = {
  name: 'millihertz',
  symbol: 'mHz',
};

export const MICROHERTZ: MicroHertzUnit = {
  name: 'microhertz',
  symbol: 'µHz',
};

export const NANOHERTZ: NanoHertzUnit = {
  name: 'nanohertz',
  symbol: 'nHz',
};

export const PICOHERTZ: PicoHertzUnit = {
  name: 'picohertz',
  symbol: 'pHz',
};

export const FEMTOHERTZ: FemtoHertzUnit = {
  name: 'femtohertz',
  symbol: 'fHz',
};

export const ATTOHERTZ: AttoHertzUnit = {
  name: 'attohertz',
  symbol: 'aHz',
};

export const ZEPTOHERTZ: ZeptoHertzUnit = {
  name: 'zeptohertz',
  symbol: 'zHz',
};

export const YOCTOHERTZ: YoctoHertzUnit = {
  name: 'yoctohertz',
  symbol: 'yHz',
};
