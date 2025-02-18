import { JSXComponent } from "./jsxComponent/JSXComponent";

export interface NodeFields {
  refName: string;
}

export interface Node {
  getType(): string;
  toJSXComponent(): JSXComponent;
  getReferenceVariableName(): string;
}
