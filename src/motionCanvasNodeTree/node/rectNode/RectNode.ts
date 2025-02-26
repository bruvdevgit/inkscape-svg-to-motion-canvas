import { JSXComponent, JSXComponentFields } from '../jsxComponent/JSXComponent.ts';
import { initJSXComponentFactoryFn, JSXComponentFactory } from '../jsxComponent/JSXComponentFactory.ts';
import { initJSXComponentPropFactoryFn, PropFactory as JSXComponentPropFactory } from '../jsxComponent/prop/PropFactory.ts';
import { Node as MotionCanvasNode, NodeFields } from '../Node.ts';
import { PropField as JSXComponentPropField } from '../jsxComponent/prop/Prop.ts';
import { CamelCaseWrapper, initCamelCaseWrapper } from '../../../wrappers/CamelCaseWrapper.ts';
import { NodeReference } from '../../MotionCanvasCodeRenderer.ts';

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

  toJSXComponent(): JSXComponent {
    return this.deps.jsxComponentFactory.init({
      commentLabel: this.refName,
      name: 'Rect',
      props: [
        this.deps.jsxComponentPropFactory.init({
          key: 'ref',
          value: this.refName,
          removeQuotesFromValue: true,
          turnValueToCamelCase: true,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'width',
          value: `scaleCoord(${this.width})`,
          removeQuotesFromValue: true,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'height',
          value: `scaleCoord(${this.height})`,
          removeQuotesFromValue: true,
        } as JSXComponentPropField),
        this.deps.jsxComponentPropFactory.init({
          key: 'topLeft',
          value: [`coordX(${this.topLeft[0]})`, `coordY(${this.topLeft[1]})`],
          removeQuotesFromValue: true,
        } as JSXComponentPropField),
        // only mention fill if it's not set to "none"
        ...(this.fill != 'none' ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'fill',
            value: this.fill,
          } as JSXComponentPropField)] : []),
        // only mention stroke if it's not set to "none"
        ...(this.stroke != 'none' ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'stroke',
            value: this.stroke,
          } as JSXComponentPropField)] : []),
        this.deps.jsxComponentPropFactory.init({
          key: 'lineWidth',
          value: `scaleCoord(${this.lineWidth})`,
          removeQuotesFromValue: true,
        } as JSXComponentPropField),
        ...(this.radius != undefined ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'radius',
            value: `scaleCoord(${this.radius})`,
            removeQuotesFromValue: true,
          } as JSXComponentPropField)] : [])
      ]
      ,
      children: this.children.map(child => child.toJSXComponent()),
    } as JSXComponentFields);
  }

  getReferences(): NodeReference[] {
    return [{
      variableName: this.deps.camelCaseWrapper.parse(this.refName),
      type: 'Rect',
    },
    ...this.children.map(child => child.getReferences()).flat()];
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
