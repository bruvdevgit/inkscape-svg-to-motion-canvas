import { INode } from "svgson";
import { RectElementAttributesSchema } from './RectElementAttributesSchema';
import { initRectElement, InitRectElementFn, RectElement, RectElementFields } from './RectElement';
import { ElementParser } from '../ElementParser';
import { initRectElementAttributesSchema } from './RectElementAttributesSchema';
import { InitElementParserFn } from '../ElementParser';
import { initStyleAttributeParser, StyleAttributeParser } from '../../styleAttribute/StyleAttributeParser';
import { Element as InkscapeSVGElement } from '../Element';
import { ElementParserFactory } from '../ElementParserFactory';

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
  = (elementParserFactory: ElementParserFactory) => new _RectElementParser({
    svgRectElementSchema: initRectElementAttributesSchema(),
    initRectElementFn: initRectElement,
    svgElementStyleAttributeParser: initStyleAttributeParser(),
    elementParserFactory,
  });
/* c8 ignore stop */

