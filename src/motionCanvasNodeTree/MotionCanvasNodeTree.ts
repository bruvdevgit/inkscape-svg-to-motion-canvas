import { Node as MotionCanvasNode } from "./node/Node";

// antecedent : consequent
//
//  viewbox   :  width
//   width
//     |           |
//     V           V
//     x      :   f(x)
//

export interface MotionCanvasNodeTreeFields {
  nodes: MotionCanvasNode[],
  canvasHeight: number,
  canvasWidth: number,
  heightAntecedent?: number,
  widthAntecedent?: number,
}

export interface MotionCanvasNodeTree {
  toFileContentString(): string;
}

export class _MotionCanvasNodeTree implements MotionCanvasNodeTree {
  nodes: MotionCanvasNode[] = [];
  canvasHeight: number = 0;
  canvasWidth: number = 0;

  constructor(fields: MotionCanvasNodeTreeFields) {
    Object.assign(this, fields);
  }

  toFileContentString(): string {
    return this.nodes.map(node => node
      .toJSXComponent()
      .toFileContentString()).join('\n');
  }
}

export function initMotionCanvasNodeTree(
  fields: MotionCanvasNodeTreeFields): MotionCanvasNodeTree {
  return new _MotionCanvasNodeTree(fields);
}
