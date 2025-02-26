import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _MotionCanvasNodeTree, MotionCanvasNodeTreeFields } from './MotionCanvasNodeTree';
import { _RectNode } from './node/RectNode';
import { Node as MotionCanvasNode } from './node/Node';
import { JSXComponent } from './node/jsxComponent/JSXComponent';
import { MotionCanvasCodeRenderer, NodeReference, OutputFileFields } from './MotionCanvasCodeRenderer';

t.test('toFileContentString correctly stringifies', t => {
	const node1 = Substitute.for<MotionCanvasNode>();
	const jsxComponent1 = Substitute.for<JSXComponent>();
	jsxComponent1
		.toFileContentString()
		.returns('<JSXComponenet1></JSXComponent1>');
	node1
		.toJSXComponent()
		.returns(jsxComponent1);
	node1
		.getReferences()
		.returns([{
			variableName: 'jsxComponent1VariableName',
			type: 'Type1'
		} as NodeReference]);

	const node2 = Substitute.for<MotionCanvasNode>();
	const jsxComponent2 = Substitute.for<JSXComponent>();
	jsxComponent2
		.toFileContentString()
		.returns('<JSXComponenet2></JSXComponent2>');
	node2
		.toJSXComponent()
		.returns(jsxComponent2);
	node2
		.getReferences()
		.returns([{
			variableName: 'jsxComponent2VariableName',
			type: 'Type2'
		} as NodeReference]);

	const node3 = Substitute.for<MotionCanvasNode>();
	const jsxComponent3 = Substitute.for<JSXComponent>();
	jsxComponent3
		.toFileContentString()
		.returns('<JSXComponenet3></JSXComponent3>');
	node3
		.toJSXComponent()
		.returns(jsxComponent3);
	node3
		.getReferences()
		.returns([{
			variableName: 'jsxComponent3VariableName',
			type: 'Type3'
		} as NodeReference]);

	const codeRenderer = Substitute.for<MotionCanvasCodeRenderer>();


	const renderArgs = {
		viewAdderFunctionName: 'viewFn',
		canvasHeight: 1080,
		canvasWidth: 1920,
		heightAntecedent: 287.75,
		widthAntecedent: 508,
		components: [jsxComponent1, jsxComponent2, jsxComponent3],
		references: [
			{
				variableName: 'jsxComponent1VariableName',
				type: 'Type1',
			},
			{
				variableName: 'jsxComponent2VariableName',
				type: 'Type2',
			},
			{
				variableName: 'jsxComponent3VariableName',
				type: 'Type3',
			},
		],
	} as OutputFileFields;

	codeRenderer.render(renderArgs)
		.returns('<FileContentStringPlaceholder>');

	const motionCanvasNodeTree = new _MotionCanvasNodeTree({
		codeRenderer,
	}, {
		nodes: [node1, node2, node3],
		canvasHeight: 1080,
		canvasWidth: 1920,
		heightAntecedent: 287.75,
		widthAntecedent: 508,
	} as MotionCanvasNodeTreeFields);

	const found = motionCanvasNodeTree.toFileContentString('viewFn');
	const wanted = '<FileContentStringPlaceholder>';

	// start testing internal calls

	codeRenderer.received().render(renderArgs);

	// stop testing internal calls

	t.equal(found, wanted);
	t.end();
});
