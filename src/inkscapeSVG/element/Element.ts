import { Node as MotionCanvasNode } from "../../motionCanvasNodeTree/node/Node";

export interface Element {
  toMotionCanvasNode(children: MotionCanvasNode[]): MotionCanvasNode;
}

export type InitElementType = () => Element;

