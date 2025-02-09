import { Comment, Declaration } from "inline-style-parser";
import { initInlineStyleParserWrapper, InlineStyleParserWrapper } from "../../wrappers/InlineStyleParserWrapper";
import { initStyleAttributesSchema, StyleAttributesSchema } from "./StyleAttributesSchema";

export interface StyleAttributes {
  fill: string;
  fillOpacity: number;
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
  parse(styleLine: string): Partial<StyleAttributes>;
}

export class _StyleAttributeParser implements StyleAttributeParser {
  constructor(public deps: {
    inlineStyleParser: InlineStyleParserWrapper,
    styleAttributesSchema: StyleAttributesSchema,
  }) {
  }


  parse(styleLine: string): Partial<StyleAttributes> {
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
      strokeWidth: obj['stroke-width'] != null ? Number(obj['stroke-width']) : undefined,
      strokeLinecap: obj?.['stroke-linecap'],
      strokeLinejoin: obj['stroke-linejoin'],
      strokeMiterlimit: obj['stroke-miterlimit'] != null ? Number(obj['stroke-miterlimit']) : undefined,
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
