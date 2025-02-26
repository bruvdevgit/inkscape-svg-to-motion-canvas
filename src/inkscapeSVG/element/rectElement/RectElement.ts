import { Node as MotionCanvasNode } from '../../../motionCanvasNodeTree/node/Node';
import { initRectNode, InitRectNode, RectNodeFields } from '../../../motionCanvasNodeTree/node/rectNode/RectNode';
import { StyleAttributes } from '../../styleAttribute/StyleAttributeParser';
import { Element } from '../Element';

export interface RectElementFields extends StyleAttributes {
  label: string;
  id: string;
  x: number;
  y: number;
  rx?: number;
  ry?: number;
  width: number;
  height: number;
  children: Element[];
}

export interface RectElement
  extends Element, RectElementFields {
}

export class _RectElement implements RectElement {
  // these defaults are necessary because typescript
  // doesn't play nice with Object.assign
  label: string = '';
  id: string = '';
  width: number = 0;
  height: number = 0;
  x: number = 0;
  y: number = 0;
  rx?: number;
  ry?: number;
  fill: string = '';
  fillOpacity: number = 0;
  stroke: string = '';
  strokeWidth: number = 0;
  strokeLinecap: string = '';
  strokeLinejoin: string = '';
  strokeMiterlimit: number = 0;
  strokeDasharray?: string = '';
  strokeOpacity?: number = 0;
  paintOrder: string = '';
  children: Element[] = [];

  constructor(public deps: {
    initMotionCanvasRectNodeFn: InitRectNode,
  }, init: RectElementFields) {
    Object.assign(this, init);
  }

  toMotionCanvasNodes(): MotionCanvasNode[] {
    return [this.deps.initMotionCanvasRectNodeFn({
      refName: this.label,
      width: this.width,
      height: this.height,
      topLeft: [this.x, this.y],
      fill: this.fill,
      stroke: this.stroke,
      lineWidth: this.strokeWidth,
      ...(this.ry != undefined || this.rx != undefined
        ? { radius: this.ry ?? this.rx }
        : {}),
      children: this.children.map(child => child.toMotionCanvasNodes()).flat(),
    } as RectNodeFields,
    )];
  }

}

export type InitRectElementFn = (init: RectElementFields) => RectElement;

export const initRectElement: InitRectElementFn
  = (init: RectElementFields) => new _RectElement({
    initMotionCanvasRectNodeFn: initRectNode
  }, init);
