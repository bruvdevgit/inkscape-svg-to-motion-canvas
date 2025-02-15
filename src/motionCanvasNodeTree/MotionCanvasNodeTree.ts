import { Node as MotionCanvasNode } from "./node/Node";

export interface MotionCanvasNodeTree {
  toFileContentString(): string;
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
