import { INode, IParseOptions, parse, parseSync } from 'svgson';

export interface SvgsonWrapper {
  parse(input: string, options?: IParseOptions): Promise<INode>;
  parseSync(input: string, options?: IParseOptions): INode;
}

/* c8 ignore start */
class _SvgsonWrapper {
  constructor() {
  }

  parse(input: string, options?: IParseOptions): Promise<INode> {
    return parse(input, options);
  }

  parseSync(input: string, options?: IParseOptions): INode {
    return parseSync(input, options);
  }
}

export function initSvgsonWrapper(): SvgsonWrapper {
  return new _SvgsonWrapper();
}
/* c8 ignore end */
