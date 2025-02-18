import { Node as MotionCanvasNode } from "../../motionCanvasNodeTree/node/Node";

export interface Element {
  toMotionCanvasNode(): MotionCanvasNode;
}

export type InitElementType = () => Element;

