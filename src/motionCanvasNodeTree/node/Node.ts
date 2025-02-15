import { JSXComponent } from "./jsxComponent/JSXComponent";

// avoid using this because it causes annoying problems
//export interface NodeProps {
//}

//export interface Node
//  extends NodeProps {


export interface Node {
  toJSXComponent(): JSXComponent;
}
