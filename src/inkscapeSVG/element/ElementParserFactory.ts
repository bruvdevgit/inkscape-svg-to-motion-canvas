import { INode } from "svgson";
import { ElementParser, InitElementParserFn } from './ElementParser';
import { initRectElementParser, } from "./rectElement/RectElementParser";

export interface ElementParserFactory {
  init(iNode: INode): ElementParser;
}

export class _ElementParserFactory {
  constructor(public deps: {
    initRectElementParserFn: InitElementParserFn
  }) {
  }


  init(iNode: INode): ElementParser {
    if (iNode.name == 'rect') {
      // TODO: consider this: since these parsers don't have 
      // internal data they don't have to stay fresh.
      // So maybe they shouldn't be reinitialized each time.
      // We can reuse instances.
      return this.deps.initRectElementParserFn();
    }
    else throw RangeError(`Encountered an SVG Element that wasn't accounted for: ${iNode.name}`);
  }
}

export type InitElementParserFactoryFn = () => ElementParserFactory;

export const initElementParserFactory = () => new _ElementParserFactory({
  initRectElementParserFn: initRectElementParser,
});
