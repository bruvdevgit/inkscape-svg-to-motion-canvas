import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _RectNode } from './node/rectNode/RectNode';
import { Node } from './node/Node';
import { JSXComponent } from './node/jsxComponent/JSXComponent';
import { MotionCanvasCodeRenderer, NodeReference, OutputFileFields } from './MotionCanvasCodeRenderer';
import { _MotionCanvasNodesList, RenderInfo } from './MotionCanvasNodesList';

t.test('getRenderInfo correctly collects info needed for rendering', t => {
	const node1 = Substitute.for<Node>();
	const jsxComponent1 = Substitute.for<JSXComponent>();
	const references1: NodeReference[] = [{
		variableName: 'jsxComponent1VariableName',
		type: 'Type1'
	} as NodeReference];

	jsxComponent1
		.toFileContentString()
		.returns('<JSXComponenet1></JSXComponent1>');
	node1
		.toJSXComponent()
		.returns(jsxComponent1);
	node1
		.getReferences()
		.returns(references1);

	const node2 = Substitute.for<Node>();
	const jsxComponent2 = Substitute.for<JSXComponent>();
	const references2: NodeReference[] = [{
		variableName: 'jsxComponent2VariableName',
		type: 'Type2'
	} as NodeReference];
	jsxComponent2
		.toFileContentString()
		.returns('<JSXComponenet2></JSXComponent2>');
	node2
		.toJSXComponent()
		.returns(jsxComponent2);
	node2
		.getReferences()
		.returns(references2);

	const node3 = Substitute.for<Node>();
	const jsxComponent3 = Substitute.for<JSXComponent>();
	const references3: NodeReference[] = [{
		variableName: 'jsxComponent3VariableName',
		type: 'Type3'
	} as NodeReference]
	jsxComponent3
		.toFileContentString()
		.returns('<JSXComponenet3></JSXComponent3>');
	node3
		.toJSXComponent()
		.returns(jsxComponent3);
	node3
		.getReferences()
		.returns(references3);

	const renderInfo = {
		jsxComponents: [jsxComponent1, jsxComponent2, jsxComponent3],
		references: [references1[0], references2[0], references3[0]],
	} satisfies RenderInfo;


	const motionCanvasNodeTree = new _MotionCanvasNodesList([node1, node2, node3]);

	const found = motionCanvasNodeTree.getRenderInfo();
	const wanted = { ...renderInfo };

	t.same(found, wanted);
	t.end();
});
