import { JSXComponent, JSXComponentFields } from '../jsxComponent/JSXComponent';
import { initJSXComponentFactoryFn, JSXComponentFactory } from '../jsxComponent/JSXComponentFactory';
import { initJSXComponentPropFactoryFn, PropFactory as JSXComponentPropFactory } from '../jsxComponent/prop/PropFactory';
import { Node as MotionCanvasNode, NodeFields } from '../Node';
import { PropField as JSXComponentPropField } from '../jsxComponent/prop/Prop';
import { CamelCaseWrapper, initCamelCaseWrapper } from '../../../wrappers/CamelCaseWrapper';
import { NodeReference } from '../../MotionCanvasCodeRenderer';

export interface RectNodeFields extends NodeFields {
  width?: number;
  height?: number;
  topLeft?: [number, number];
  fill?: string;
  stroke?: string;
  lineWidth?: number;
  radius?: number;
  children: MotionCanvasNode[];
}

export interface RectNode
  extends MotionCanvasNode, RectNodeFields {
}

export class _RectNode implements RectNode {
  // these defaults are necessary because typescript
  // doesn't play nice with Object.assign
  refName: string = '';
  width?: number;
  height?: number;
  topLeft?: [number, number];
  fill?: string;
  stroke?: string;
  lineWidth?: number;
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
        } satisfies JSXComponentPropField),
        ...(this.width != null ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'width',
            value: `scaleCoord(${this.width})`,
            removeQuotesFromValue: true,
          } satisfies JSXComponentPropField)] : []),
        ...(this.height != null ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'height',
            value: `scaleCoord(${this.height})`,
            removeQuotesFromValue: true,
          } satisfies JSXComponentPropField)] : []),
        ...(this.topLeft != null ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'topLeft',
            value: [`coordX(${this.topLeft[0]})`, `coordY(${this.topLeft[1]})`],
            removeQuotesFromValue: true,
          } satisfies JSXComponentPropField)] : []),
        // only mention fill if it's not set to "none"
        ...(this.fill != null && this.fill != 'none' ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'fill',
            value: this.fill,
          } satisfies JSXComponentPropField)] : []),
        // only mention stroke if it's not set to "none"
        ...(this.stroke != null && this.stroke != 'none' ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'stroke',
            value: this.stroke,
          } satisfies JSXComponentPropField)] : []),
        ...(this.lineWidth != null ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'lineWidth',
            value: `scaleCoord(${this.lineWidth})`,
            removeQuotesFromValue: true,
          } satisfies JSXComponentPropField)] : []),
        ...(this.radius != undefined ?
          [this.deps.jsxComponentPropFactory.init({
            key: 'radius',
            value: `scaleCoord(${this.radius})`,
            removeQuotesFromValue: true,
          } satisfies JSXComponentPropField)] : [])
      ]
      ,
      children: this.children.map(child => child.toJSXComponent()),
    } satisfies JSXComponentFields);
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
