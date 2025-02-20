import { JSXComponent } from './jsxComponent/JSXComponent.ts';

export interface NodeFields {
  refName: string;
}

export interface Node {
  getType(): string;
  toJSXComponent(): JSXComponent;
  getReferenceVariableName(): string;
}
