import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _MotionCanvasNodeTree, MotionCanvasNodeTreeFields } from './MotionCanvasNodeTree';
import { _RectNode } from './node/rectNode/RectNode';
import { Node as MotionCanvasNode } from './node/Node';
import { JSXComponent } from './node/jsxComponent/JSXComponent';
import { MotionCanvasCodeRenderer, NodeReference, OutputFileFields } from './MotionCanvasCodeRenderer';
import { MotionCanvasNodesList, RenderInfo } from './MotionCanvasNodesList';
import { InkscapeSVGConfig } from '../mainConfig/MainConfigSchema';
import { FsWrapper } from '../wrappers/FsWrapper';

t.test('toFileContentString correctly stringifies', async t => {
	const jsxComponent1 = Substitute.for<JSXComponent>();
	const reference1 = {
		variableName: 'jsxComponent1VariableName',
		type: 'Type1'
	} as NodeReference;

	const jsxComponent2 = Substitute.for<JSXComponent>();
	const reference2 = {
		variableName: 'jsxComponent2VariableName',
		type: 'Type2'
	} as NodeReference;

	const jsxComponent3 = Substitute.for<JSXComponent>();
	const reference3 = {
		variableName: 'jsxComponent3VariableName',
		type: 'Type3'
	} as NodeReference;

	const renderInfo: RenderInfo = {
		jsxComponents: [jsxComponent1, jsxComponent2, jsxComponent3],
		references: [reference1, reference2, reference3],
	};

	const nodesList = Substitute.for<MotionCanvasNodesList>();
	nodesList.getRenderInfo()
		.returns(renderInfo);

	const codeRenderer = Substitute.for<MotionCanvasCodeRenderer>();


	const renderArgs: OutputFileFields = {
		viewAdderFunctionName: 'landingPageLarge',
		canvasHeight: 1080,
		canvasWidth: 1920,
		heightAntecedent: 287.75,
		widthAntecedent: 508,
		components: [...renderInfo.jsxComponents],
		references: [...renderInfo.references],
	};

	codeRenderer.render(renderArgs)
		.returns('<FileContentStringPlaceholder>');

	const fsWrapper = Substitute.for<FsWrapper>();
	fsWrapper.writeFile('./src/pagesOutput/landingPageLarge.tsx', '<FileContentStringPlaceholder>')
		.returns(Promise.resolve());

	const motionCanvasNodeTree = new _MotionCanvasNodeTree({
		codeRenderer,
		fs: fsWrapper,
	}, {
		nodes: nodesList,
		canvasHeight: 1080,
		canvasWidth: 1920,
		heightAntecedent: 287.75,
		widthAntecedent: 508,
	} satisfies MotionCanvasNodeTreeFields);

	await motionCanvasNodeTree.generateOutputFiles({
		input: {
			filePath: "./landing_page_lg.svg",
		},
		output: {
			directoryPath: "./src/pagesOutput",
			viewAdderFunctionName: 'landingPageLarge',
		}
	} satisfies InkscapeSVGConfig);

	// start testing internal calls

	codeRenderer.received().render(renderArgs);
	fsWrapper.received()
		.writeFile('./src/pagesOutput/landingPageLarge.tsx', '<FileContentStringPlaceholder>');

	// stop testing internal calls

	t.end();
});
