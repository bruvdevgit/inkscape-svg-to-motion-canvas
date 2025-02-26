import { Node as MotionCanvasNode } from '../../../motionCanvasNodeTree/node/Node';
import { initRectNode, InitRectNode, RectNodeFields } from '../../../motionCanvasNodeTree/node/rectNode/RectNode';
import { Element } from '../Element';

export interface GroupElementFields {
  id: string;
  children: Element[];
}

export interface GroupElement
  extends Element, GroupElementFields {
}

export class _GroupElement implements GroupElement {
  // these defaults are necessary because typescript
  // doesn't play nice with Object.assign
  id: string = '';
  children: Element[] = [];

  constructor(public deps: {
    initMotionCanvasRectNodeFn: InitRectNode,
  }, init: GroupElementFields) {
    Object.assign(this, init);
  }

  toMotionCanvasNodes(): MotionCanvasNode[] {
    return [this.deps.initMotionCanvasRectNodeFn({
      refName: this.id,
      children: this.children.map(child => child.toMotionCanvasNodes()).flat(),
    } satisfies RectNodeFields,
    )];
  }

}

export type InitGroupElementFn = (init: GroupElementFields) => GroupElement;

export const initGroupElement: InitGroupElementFn
  = (init: GroupElementFields) => new _GroupElement({
    initMotionCanvasRectNodeFn: initRectNode
  }, init);
