
import YAML, { DocumentOptions, ParseOptions, SchemaOptions, ToJSOptions } from 'yaml'

export interface YAMLWrapper {
  // define the same api as _YAMLWrapper
  parse(src: string, options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions): any;
}

class _YAMLWrapper implements YAMLWrapper {
  constructor() {
  }

  parse(src: string, options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions): any {
    return YAML.parse(src, options);
  }
}

export function createYAMLWrapper(): YAMLWrapper {
  return new _YAMLWrapper();
}
