import { INode } from "svgson";
import { ElementParser, InitElementParserFn } from './ElementParser.ts';
import { initRectElementParser, } from './rectElement/RectElementParser.ts';

export interface ElementParserFactory {
  init(iNode: INode): ElementParser;
}

// Since these parsers don't have 
// internal data they don't have to stay fresh.
// So maybe they shouldn't be reinitialized each time.
// We can reuse instances.
export class _ElementParserFactory {
  rectElementParser: ElementParser | null = null;

  constructor(public deps: {
    initRectElementParserFn: InitElementParserFn
  }) {
  }


  init(iNode: INode): ElementParser {
    if (iNode.name == 'rect') {
      if (this.rectElementParser == null)
        this.rectElementParser = this.deps.initRectElementParserFn();

      return this.rectElementParser;
    }
    else throw RangeError(`Encountered an SVG Element that wasn't accounted for: ${iNode.name}`);
  }
}

export type InitElementParserFactoryFn = () => ElementParserFactory;

/* c8 ignore start */
export const initElementParserFactory = () => new _ElementParserFactory({
  initRectElementParserFn: initRectElementParser,
});
/* c8 ignore stop */
