import { initMotionCanvasNodesList, InitMotionCanvasNodesListFn } from '../motionCanvasNodeTree/MotionCanvasNodesList';
import { initMotionCanvasNodeTree, InitMotionCanvasNodeTreeFn, MotionCanvasNodeTree, MotionCanvasNodeTreeFields } from '../motionCanvasNodeTree/MotionCanvasNodeTree';
import { Element as InkscapeSVGElement } from './element/Element';

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
  toMotionCanvasNodeTree(): MotionCanvasNodeTree;
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
    public deps: {
      initMotionCanvasNodeTreeFn: InitMotionCanvasNodeTreeFn,
      initMotionCanvasNodesList: InitMotionCanvasNodesListFn,
    },
    init: InkscapeSVGFields) {
    Object.assign(this, init);
  }

  toMotionCanvasNodeTree(): MotionCanvasNodeTree {
    return this.deps.initMotionCanvasNodeTreeFn({
      nodes: this.deps.initMotionCanvasNodesList(
        this.elements.map(elem => elem.toMotionCanvasNodes()).flat()),
      canvasHeight: this.height,
      canvasWidth: this.width,
      heightAntecedent: this.viewBox.height,
      widthAntecedent: this.viewBox.width,
    } satisfies MotionCanvasNodeTreeFields);
  }
}

export type InitInkscapeSVGFn = (
  init: InkscapeSVGFields) => InkscapeSVG;

export const initInkscapeSVG: InitInkscapeSVGFn
  = (init: InkscapeSVGFields) =>
    new _InkscapeSVG({
      initMotionCanvasNodeTreeFn: initMotionCanvasNodeTree,
      initMotionCanvasNodesList: initMotionCanvasNodesList,
    }, init);

