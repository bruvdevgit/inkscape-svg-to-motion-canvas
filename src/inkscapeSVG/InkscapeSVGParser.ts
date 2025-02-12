import { initInkscapeSVG, InkscapeSVG, InitInkscapeSVGFn, ViewBox } from "./InkscapeSVG";
import { Element as InkscapeSVGElement } from "./element/Element";
import { initInkscapeSVGAttributesSchema, InkscapeSVGAttributesSchema } from "./InkscapeSVGAttributesSchema";
import { initSvgsonWrapper, SvgsonWrapper } from "../wrappers/SvgsonWrapper";
import { ElementParserFactory, initElementParserFactory } from "./element/ElementParserFactory";
import { INode } from "svgson";

export interface InkscapeSVGParser {
  parse(str: string): InkscapeSVG;
}

export class _InkscapeSVGParser implements InkscapeSVGParser {
  constructor(public deps: {
    svgson: SvgsonWrapper,
    initInkscapeSVGFn: InitInkscapeSVGFn,
    svgAttributesSchema: InkscapeSVGAttributesSchema,
    elementParserFactory: ElementParserFactory,
  }) {
  }

  parse(str: string): InkscapeSVG {
    const svgsonObj = this.deps.svgson.parseSync(str);

    const {
      width: widthStr, height: heightStr, viewBox: viewboxStr
    } = this.deps.svgAttributesSchema.parse(svgsonObj.attributes);

    const width = +widthStr;
    const height = +heightStr;

    const [minX, minY, w, h] = viewboxStr.split(' ');
    const viewBox: ViewBox = {
      minX: +minX,
      minY: +minY,
      width: +w,
      height: +h,
    };

    //TODO: navigate to the elements more sphisticatedly
    const svgsonObjChildrenElements = svgsonObj
      // choose the child that represents the first Inkscape layer
      .children.find(node => node.name == 'g'
        && node.attributes["inkscape:groupmode"] == "layer")?.children;
    if (!svgsonObjChildrenElements)
      throw RangeError(`This inkscape SVG is in an invalid format`);

    let elements: InkscapeSVGElement[] = svgsonObjChildrenElements
      .map((node: INode) => {
        const parser = this.deps.elementParserFactory.init(node);
        return parser.parse(node);
      });

    return this.deps.initInkscapeSVGFn({
      width,
      height,
      viewBox,
      elements,
    });
  }
}

/* c8 ignore start */
export function initInkscapeSVGParser(): InkscapeSVGParser {
  return new _InkscapeSVGParser({
    svgson: initSvgsonWrapper(),
    initInkscapeSVGFn: initInkscapeSVG,
    svgAttributesSchema: initInkscapeSVGAttributesSchema(),
    elementParserFactory: initElementParserFactory(),
  });
}
/* c8 ignore stop */

