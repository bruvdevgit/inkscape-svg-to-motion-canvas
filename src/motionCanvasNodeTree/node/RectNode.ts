import { JSXComponent, JSXComponentFields } from "./jsxComponent/JSXComponent";
import { initJSXComponentFactoryFn, JSXComponentFactory } from "./jsxComponent/JSXComponentFactory";
import { initJSXComponentPropFactoryFn, PropFactory as JSXComponentPropFactory } from "./jsxComponent/prop/PropFactory";
import { Node as MotionCanvasNode } from "./Node";
import { PropField as JSXComponentPropField } from "./jsxComponent/prop/Prop";

export interface RectNodeFields {
  //ref={greenFillAndStrokeRectXLongSharpCorners}
  refName: string;

  width: number;
  height: number;
  topLeft: [number, number];
  fill: string;
  stroke: string;
  lineWidth: number;
  radius?: number;
}

export interface RectNode
  extends MotionCanvasNode, RectNodeFields {
  children: MotionCanvasNode[];
}

export class _RectNode implements RectNode {
  // these defaults are necessary because typescript
  // doesn't play nice with Object.assign
  refName: string = '';
  width: number = 0;
  height: number = 0;
  topLeft: [number, number] = [0, 0];
  fill: string = '';
  stroke: string = '';
  lineWidth: number = 0;
  radius?: number;

  constructor(
    public deps: {
      jsxComponentFactory: JSXComponentFactory,
      jsxComponentPropFactory: JSXComponentPropFactory,
    },
    init: RectNodeFields,
    public children: MotionCanvasNode[]) {
    Object.assign(this, init);
  }

  toJSXComponent(): JSXComponent {
    return this.deps.jsxComponentFactory.init({
      commentLabel: this.refName,
      name: "Rect",
      props: [
        this.deps.jsxComponentPropFactory.init({
          key: 'ref',
          value: this.refName,
          removeQuotesFromValue: true,
          turnValueToCamelCase: true,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'width',
          value: this.width,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'height',
          value: this.height,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'topLeft',
          value: [...this.topLeft],
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'fill',
          value: this.fill,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'stroke',
          value: this.stroke,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'lineWidth',
          value: this.lineWidth,
        } as JSXComponentPropField),
        ...(this.radius != undefined ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'radius',
            value: this.radius,
          } as JSXComponentPropField)] : [])
      ]
      ,
      children: this.children.map(child => child.toJSXComponent()),
    } as JSXComponentFields);
  }
}

export type InitRectNode = (
  init: RectNodeFields,
  children: MotionCanvasNode[],
) => RectNode;

export const initRectNode: InitRectNode = (
  init: RectNodeFields,
  children: MotionCanvasNode[],
) => new _RectNode({
  jsxComponentFactory: initJSXComponentFactoryFn(),
  jsxComponentPropFactory: initJSXComponentPropFactoryFn(),
}, init, children);
