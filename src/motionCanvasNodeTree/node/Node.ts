import { JSXComponent } from "./jsxComponent/JSXComponent";

export interface NodeFields {
  refName: string;
}

// avoid using this because it causes annoying problems
//export interface NodeProps {
//}

//export interface Node
//  extends NodeProps {


export interface Node {
  toJSXComponent(): JSXComponent;
  getReferenceVariableName(): string;
}
