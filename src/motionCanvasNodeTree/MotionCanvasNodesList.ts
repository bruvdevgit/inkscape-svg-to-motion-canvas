import { NodeReference } from "./MotionCanvasCodeRenderer";
import { JSXComponent } from "./node/jsxComponent/JSXComponent";
import { Node } from "./node/Node";

export interface RenderInfo {
	jsxComponents: JSXComponent[];
	// TODO: define files like CustomCircle.ts
	//helperFiles: string[];
	references: NodeReference[];
}

export interface MotionCanvasNodesList {
	getRenderInfo(): RenderInfo;
}

export class _MotionCanvasNodesList implements MotionCanvasNodesList {
	constructor(public nodes: Node[]) { }

	getRenderInfo(): RenderInfo {
		const jsxComponents: JSXComponent[] = [];
		let references: NodeReference[] = [];
		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			jsxComponents.push(node.toJSXComponent());
			references = [...references, ...node.getReferences()];
		}

		return {
			jsxComponents,
			references,
		};
	}

}

export type InitMotionCanvasNodesListFn
	= (nodes: Node[]) => MotionCanvasNodesList;

export const initMotionCanvasNodesList: InitMotionCanvasNodesListFn
	= (nodes: Node[]) => new _MotionCanvasNodesList(nodes); 
