import { initMotionCanvasCodeRenderer, MotionCanvasCodeRenderer, OutputFileFields } from "./MotionCanvasCodeRenderer";
import { JSXComponent } from "./node/jsxComponent/JSXComponent";
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
	toFileContentString(viewAdderFunctionName: string): string;
}

export class _MotionCanvasNodeTree
	implements MotionCanvasNodeTree, MotionCanvasNodeTreeFields {
	nodes: MotionCanvasNode[] = [];
	canvasHeight: number = 0;
	canvasWidth: number = 0;
	heightAntecedent?: number;
	widthAntecedent?: number;

	constructor(public deps: {
		codeRenderer: MotionCanvasCodeRenderer,
	}, fields: MotionCanvasNodeTreeFields) {
		Object.assign(this, fields);
	}

	toFileContentString(viewAdderFunctionName: string):
		string {
		const jsxComponents: JSXComponent[] = [];
		const references = [];

		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			jsxComponents.push(node.toJSXComponent());
			references.push({
				variableName: node.getReferenceVariableName(),
				type: node.getType(),
			});
		}

		return this.deps.codeRenderer.render({
			viewAdderFunctionName,
			canvasHeight: this.canvasHeight,
			canvasWidth: this.canvasWidth,
			heightAntecedent: this.heightAntecedent,
			widthAntecedent: this.widthAntecedent,
			components: jsxComponents,
			references,
		} as OutputFileFields);
	}
}

export type InitMotionCanvasNodeTreeFn = (
	fields: MotionCanvasNodeTreeFields) => MotionCanvasNodeTree;

export const initMotionCanvasNodeTree = (
	fields: MotionCanvasNodeTreeFields) =>
	new _MotionCanvasNodeTree({
		codeRenderer: initMotionCanvasCodeRenderer(),
	}, fields);
