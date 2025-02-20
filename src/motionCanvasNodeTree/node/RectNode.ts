import { JSXComponent, JSXComponentFields } from './jsxComponent/JSXComponent.ts';
import { initJSXComponentFactoryFn, JSXComponentFactory } from './jsxComponent/JSXComponentFactory.ts';
import { initJSXComponentPropFactoryFn, PropFactory as JSXComponentPropFactory } from './jsxComponent/prop/PropFactory.ts';
import { Node as MotionCanvasNode, NodeFields } from './Node.ts';
import { PropField as JSXComponentPropField } from './jsxComponent/prop/Prop.ts';
import { CamelCaseWrapper, initCamelCaseWrapper } from '../../wrappers/CamelCaseWrapper.ts';

export interface RectNodeFields extends NodeFields {
  width: number;
  height: number;
  topLeft: [number, number];
  fill: string;
  stroke: string;
  lineWidth: number;
  radius?: number;
  children?: MotionCanvasNode[];
}

export interface RectNode
  extends MotionCanvasNode, RectNodeFields {
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
  children: MotionCanvasNode[] = [];

  constructor(
    public deps: {
      camelCaseWrapper: CamelCaseWrapper,
      jsxComponentFactory: JSXComponentFactory,
      jsxComponentPropFactory: JSXComponentPropFactory,
    },
    init: RectNodeFields,) {
    Object.assign(this, init);
  }

  getType() {
    return 'Rect';
  }

  toJSXComponent(): JSXComponent {
    return this.deps.jsxComponentFactory.init({
      commentLabel: this.refName,
      name: this.getType(),
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

  getReferenceVariableName(): string {
    return this.deps.camelCaseWrapper.parse(this.refName);
  }
}

export type InitRectNode = (
  init: RectNodeFields,
) => RectNode;

export const initRectNode: InitRectNode = (
  init: RectNodeFields,
) => new _RectNode({
  camelCaseWrapper: initCamelCaseWrapper(),
  jsxComponentFactory: initJSXComponentFactoryFn(),
  jsxComponentPropFactory: initJSXComponentPropFactoryFn(),
}, init);
