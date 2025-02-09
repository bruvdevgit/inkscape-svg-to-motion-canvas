import { Comment, Declaration } from "inline-style-parser";
import { initInlineStyleParserWrapper, InlineStyleParserWrapper } from "../../wrappers/InlineStyleParserWrapper";
import { initStyleAttributesSchema, StyleAttributesSchema } from "./StyleAttributesSchema";

// These fields match StyleAttributesFromSchema but with
// some fields being here number type instead of string type
export interface StyleAttributes {
  fill: string;
  fillOpacity?: number;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: string;
  strokeLinejoin: string;
  strokeMiterlimit: number;
  strokeDasharray?: string;
  strokeOpacity?: number;
  paintOrder: string;
}

export interface StyleAttributeParser {
  parse(styleLine: string): StyleAttributes;
}

export class _StyleAttributeParser implements StyleAttributeParser {
  constructor(public deps: {
    inlineStyleParser: InlineStyleParserWrapper,
    styleAttributesSchema: StyleAttributesSchema,
  }) {
  }


  parse(styleLine: string): StyleAttributes {
    const parsed: (Declaration | Comment)[]
      = this.deps.inlineStyleParser.parse(styleLine);

    const styleObjEntries = parsed
      .filter(o => o.type === 'declaration')
      .map(o => {
        const dec = o as Declaration;
        return [dec.property, dec.value]
      });

    const styleObj = Object.fromEntries(styleObjEntries);

    const obj = this.deps.styleAttributesSchema.parse(styleObj);

    return {
      fill: obj.fill,
      fillOpacity: obj['fill-opacity'] != null ? Number(obj['fill-opacity']) : undefined,
      stroke: obj.stroke,
      strokeWidth: Number(obj['stroke-width']),
      strokeLinecap: obj?.['stroke-linecap'],
      strokeLinejoin: obj['stroke-linejoin'],
      strokeMiterlimit: Number(obj['stroke-miterlimit']),
      strokeDasharray: obj['stroke-dasharray'],
      strokeOpacity: obj['stroke-opacity'] != null ? Number(obj['stroke-opacity']) : undefined,
      paintOrder: obj['paint-order'],
    }
  }
}

export type InitStyleAttributeParserFn = () => StyleAttributeParser;

/* c8 ignore start */
export const initStyleAttributeParser: InitStyleAttributeParserFn
  = () => new _StyleAttributeParser({
    inlineStyleParser: initInlineStyleParserWrapper(),
    styleAttributesSchema: initStyleAttributesSchema(),
  });
/* c8 ignore stop */
