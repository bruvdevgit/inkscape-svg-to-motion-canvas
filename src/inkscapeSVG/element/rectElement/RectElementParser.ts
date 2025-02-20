import { INode } from "svgson";
import { RectElementAttributesSchema } from './RectElementAttributesSchema.ts';
import { initRectElement, InitRectElementFn, RectElement, RectElementFields } from './RectElement.ts';
import { ElementParser } from '../ElementParser.ts';
import { initRectElementAttributesSchema } from './RectElementAttributesSchema.ts';
import { InitElementParserFn } from '../ElementParser.ts';
import { initStyleAttributeParser, StyleAttributeParser } from '../../styleAttribute/StyleAttributeParser.ts';
import { Element as InkscapeSVGElement } from '../Element.ts';
import { ElementParserFactory, initElementParserFactory } from '../ElementParserFactory.ts';

export class _RectElementParser implements ElementParser {
  constructor(public deps: {
    svgRectElementSchema: RectElementAttributesSchema,
    initRectElementFn: InitRectElementFn,
    svgElementStyleAttributeParser: StyleAttributeParser,
    elementParserFactory: ElementParserFactory,
  }) {
  }

  parse(iNode: INode): RectElement {
    const {
      'inkscape:label': label,
      id,
      x,
      y,
      ry,
      rx,
      width,
      height,
      style,
    } = this.deps.svgRectElementSchema.parse(iNode.attributes);

    const {
      fill,
      fillOpacity,
      stroke,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
      strokeDasharray,
      strokeOpacity,
      paintOrder,
    } = this.deps.svgElementStyleAttributeParser.parse(style);

    let children: InkscapeSVGElement[] = iNode.children
      .map((node: INode) => {
        const parser = this.deps.elementParserFactory.init(node);
        return parser.parse(node);
      });

    let props: RectElementFields = {
      id,
      label,
      x: +x,
      y: +y,
      ...(rx != null ? { rx: Number(rx) } : {}),
      ...(ry != null ? { ry: Number(ry) } : {}),
      width: +width,
      height: +height,
      fill,
      fillOpacity,
      stroke,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
      strokeDasharray,
      strokeOpacity,
      paintOrder,
      children,
    };

    return this.deps.initRectElementFn(props);
  }
}

/* c8 ignore start */
export const initRectElementParser: InitElementParserFn
  = () => new _RectElementParser({
    svgRectElementSchema: initRectElementAttributesSchema(),
    initRectElementFn: initRectElement,
    svgElementStyleAttributeParser: initStyleAttributeParser(),
    elementParserFactory: initElementParserFactory(),
  });
/* c8 ignore stop */

