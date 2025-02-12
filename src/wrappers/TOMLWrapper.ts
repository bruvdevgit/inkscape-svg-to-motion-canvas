
import TOML from 'toml';

export interface TOMLWrapper {
  // define the same api as _TOMLWrapper
  parse(src: string): any;
}

class _TOMLWrapper implements TOMLWrapper {
  constructor() {
  }

  parse(src: string): any {
    return TOML.parse(src);
  }
}

export function initTOMLWrapper(): TOMLWrapper {
  return new _TOMLWrapper();
}
