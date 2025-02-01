
import TOML, { DocumentOptions, ParseOptions, SchemaOptions, ToJSOptions } from 'yaml'

export interface TOMLWrapper {
  // define the same api as _TOMLWrapper
  parse(src: string, options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions): any;
}

class _TOMLWrapper implements TOMLWrapper {
  constructor() {
  }

  parse(src: string, options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions): any {
    return TOML.parse(src, options);
  }
}

export function createTOMLWrapper(): TOMLWrapper {
  return new _TOMLWrapper();
}
