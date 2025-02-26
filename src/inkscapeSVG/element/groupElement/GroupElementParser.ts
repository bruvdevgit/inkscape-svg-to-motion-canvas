import { INode } from "svgson";
import { GroupElementAttributesSchema } from './GroupElementAttributesSchema';
import { initGroupElement, InitGroupElementFn, GroupElement, GroupElementFields } from './GroupElement';
import { ElementParser } from '../ElementParser';
import { initGroupElementAttributesSchema } from './GroupElementAttributesSchema';
import { InitElementParserFn } from '../ElementParser';
import { Element as InkscapeSVGElement } from '../Element';
import { ElementParserFactory } from '../ElementParserFactory';

export class _GroupElementParser implements ElementParser {
  constructor(public deps: {
    svgGroupElementSchema: GroupElementAttributesSchema,
    initGroupElementFn: InitGroupElementFn,
    elementParserFactory: ElementParserFactory,
  }) {
  }

  parse(iNode: INode): GroupElement {
    const {
      id,
    } = this.deps.svgGroupElementSchema.parse(iNode.attributes);

    let children: InkscapeSVGElement[] = iNode.children
      .map((node: INode) => {
        const parser = this.deps.elementParserFactory.init(node);
        return parser.parse(node);
      });

    let props: GroupElementFields = {
      id,
      children,
    };

    return this.deps.initGroupElementFn(props);
  }
}

/* c8 ignore start */
export const initGroupElementParser: InitElementParserFn
  = (elementParserFactory: ElementParserFactory) => new _GroupElementParser({
    svgGroupElementSchema: initGroupElementAttributesSchema(),
    initGroupElementFn: initGroupElement,
    elementParserFactory,
  });
/* c8 ignore stop */

