import { StyleAttributes } from "../../styleAttribute/StyleAttributeParser";

export interface RectElementFields extends StyleAttributes {
  label: string;
  id: string;
  x: number;
  y: number;
  rx?: number;
  ry?: number;
  width: number;
  height: number;
}

export interface RectElement
  extends RectElementFields {

  // toMotionCanvasComponent(): 
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
  rx: number = 0;
  ry: number = 0;
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

  constructor(init: RectElementFields) {
    Object.assign(this, init);
  }

}

export type InitRectElementFn = (init: RectElementFields) => RectElement;

export const initRectElement: InitRectElementFn
  = (init: RectElementFields) => new _RectElement(init);
