import { NodeReference } from '../MotionCanvasCodeRenderer.ts';
import { JSXComponent } from './jsxComponent/JSXComponent.ts';

export interface NodeFields {
  refName: string;
}

export interface Node {
  toJSXComponent(): JSXComponent;
  getReferences(): NodeReference[];
}
