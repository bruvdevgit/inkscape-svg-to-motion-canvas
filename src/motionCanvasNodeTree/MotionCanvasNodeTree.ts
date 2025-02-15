import { Node as MotionCanvasNode } from "./node/Node";

export interface MotionCanvasNodeTreeProps {
  toFileContentString(): string;
}

export interface MotionCanvasNodeTree
  extends MotionCanvasNodeTreeProps {
}

export class _MotionCanvasNodeTree implements MotionCanvasNodeTree {
  constructor(public nodes: MotionCanvasNode[]) {
  }

  toFileContentString(): string {
    return this.nodes.map(node => node
      .toJSXComponent()
      .toFileContentString()).join('\n');
  }
}

export function initMotionCanvasNodeTree(
  children: MotionCanvasNode[]): MotionCanvasNodeTree {
  return new _MotionCanvasNodeTree(children);
}
