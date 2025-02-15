var camelCase = require('lodash.camelcase');

export interface CamelCaseWrapper {
  parse(str: string): string;
}

/* c8 ignore start */
export class _CamelCaseWrapper {
  constructor() { }

  parse(str: string): string {
    return camelCase(str);
  }
}

export type InitCamelCaseWrapperFn
  = () => CamelCaseWrapper;

export const initCamelCaseWrapper
  = () => new _CamelCaseWrapper();
/* c8 ignore stop */
