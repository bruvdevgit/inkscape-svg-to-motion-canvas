import { MotionCanvasNodeTree } from "../motionCanvasNodeTree/MotionCanvasNodeTree";
import { Element, Element as InkscapeSVGElement } from "./element/Element";
import { initInkscapeSVGParser } from "./InkscapeSVGParser";

export interface ViewBox {
  minX: number;
  minY: number;
  height: number;
  width: number;
}

export interface InkscapeSVGFields {
  elements: InkscapeSVGElement[];
  width: number;
  height: number;
  viewBox: ViewBox;
}

export interface InkscapeSVG extends InkscapeSVGFields {
  //toMotionCanvasNodeTree(): MotionCanvasNodeTree;
}

export class _InkscapeSVG implements InkscapeSVG {
  // these defaults are necessary because typescript
  // doesn't play nice with Object.assign
  elements: InkscapeSVGElement[] = [];
  width: number = 0;
  height: number = 0;
  viewBox: ViewBox = {
    minX: 0, minY: 0,
    height: 0, width: 0,
  };

  constructor(
    init: InkscapeSVGFields,
    public children: Element[] = []) {
    Object.assign(this, init);
  }

  //toMotionCanvasNodeTree(): MotionCanvasNodeTree {
  //  // TODO
  //}
}

export type InitInkscapeSVGFn = (
  init: InkscapeSVGFields, children?: Element[]) => InkscapeSVG;

export const initInkscapeSVG: InitInkscapeSVGFn
  = (init: InkscapeSVGFields, children: Element[] = []) =>
    new _InkscapeSVG(init, children);

/* c8 ignore start */
export function parseToInkscapeSVG(
  svgStr: string,): InkscapeSVG {
  const inkscapeSVGParser = initInkscapeSVGParser();
  return inkscapeSVGParser.parse(svgStr);
}
/* c8 ignore stop */
