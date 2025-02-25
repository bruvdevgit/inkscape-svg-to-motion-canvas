import { Node as MotionCanvasNode } from '../../motionCanvasNodeTree/node/Node.ts';

export interface Element {
  // an element may translate to 0 to n (where n>1)
  // nodes
  toMotionCanvasNodes(): MotionCanvasNode[];
}

export type InitElementType = () => Element;

