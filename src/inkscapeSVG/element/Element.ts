import { Node as MotionCanvasNode } from '../../motionCanvasNodeTree/node/Node.ts';

export interface Element {
  toMotionCanvasNode(): MotionCanvasNode;
}

export type InitElementType = () => Element;

