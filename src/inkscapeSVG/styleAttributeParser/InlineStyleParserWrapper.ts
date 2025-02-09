import parse, { Comment, Declaration, Options } from 'inline-style-parser';

export interface InlineStyleParserWrapper {
  parse(
    style: string,
    options?: Options
  ): (Declaration | Comment)[];
}

/* c8 ignore start */
export class _InlineStyleParserWrapper {
  parse(
    style: string,
    options?: Options
  ): (Declaration | Comment)[] {
    return parse(style, options);
  }
}
/* c8 ignore stop */

export type InitInlineStyleParserWrapper
  = () => InlineStyleParserWrapper;

export const initInlineStyleParserWrapper: InitInlineStyleParserWrapper
  = () => new _InlineStyleParserWrapper();
