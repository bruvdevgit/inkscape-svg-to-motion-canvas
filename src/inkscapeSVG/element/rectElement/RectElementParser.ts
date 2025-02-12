import { INode } from "svgson";
import { RectElementAttributesSchema } from "./RectElementAttributesSchema";
import { initRectElement, InitRectElementFn, RectElement, RectElementProps } from "./RectElement";
import { ElementParser } from "../ElementParser";
import { initRectElementAttributesSchema } from "./RectElementAttributesSchema";
import { InitElementParserFn } from "../ElementParser";
import { initStyleAttributeParser, StyleAttributeParser } from "../../styleAttribute/StyleAttributeParser";

export class _RectElementParser implements ElementParser {
  constructor(public deps: {
    svgRectElementSchema: RectElementAttributesSchema,
    initRectElementFn: InitRectElementFn,
    svgElementStyleAttributeParser: StyleAttributeParser,
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

    let props: RectElementProps = {
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
  });
/* c8 ignore stop */

