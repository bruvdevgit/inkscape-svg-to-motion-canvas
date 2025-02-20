import t from 'tap';
import Substitute from '@fluffy-spoon/substitute';
import { _MotionCanvasCodeRenderer, OutputFileFields } from './MotionCanvasCodeRenderer.ts';
import { JSXComponent } from './node/jsxComponent/JSXComponent.ts';

t.test('render gives correctly constructed string', t => {
	const jsxComponent1 = Substitute.for<JSXComponent>();
	jsxComponent1
		.toFileContentString('\t', 2)
		.returns(
			`		{/* green-fill-and-stroke-rect-x-long-sharp-corners */}
		<Rect
			ref={greenFillAndStrokeRectXLongSharpCorners}
			width={scaleCoord(82.803673)}
			height={scaleCoord(25.728548)}
			topLeft={[coordX(9.0465326), coordY(10.700179)]}
			fill={'#2ca02c'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(1.23096)}
		/>`
		);

	const jsxComponent2 = Substitute.for<JSXComponent>();
	jsxComponent2
		.toFileContentString('\t', 2)
		.returns(
			`		{/* red-fill-and-stroke-rect-square-sharp-corners */}
		<Rect
			ref={redFillAndStrokeRectSquareSharpCorners}
			width={scaleCoord(81.960045)}
			height={scaleCoord(81.960045)}
			topLeft={[coordX(8.8836927), coordY(78.336815)]}
			fill={'#d40000'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(1.73211)}
		/>`
		);

	const jsxComponent3 = Substitute.for<JSXComponent>();
	jsxComponent3
		.toFileContentString('\t', 2)
		.returns(
			`		{/* yellow-fill-and-stroke-rect-square-rounded-corners */}
		<Rect
			ref={yellowFillAndStrokeRectSquareRoundedCorners}
			width={scaleCoord(44.620049)}
			height={scaleCoord(44.620049)}
			topLeft={[coordX(7.3198247), coordY(167.9606)]}
			fill={'#ffcc00'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(0.942981)}
			radius={scaleCoord(10.748698)}
		/>`
		);


	const fields = {
		viewAdderFunctionName: 'rects1920By1080',
		canvasHeight: 1080,
		canvasWidth: 1920,
		heightAntecedent: 285.75,
		widthAntecedent: 508,
		components: [jsxComponent1, jsxComponent2, jsxComponent3,],
		references: [
			{
				variableName: 'greenFillAndStrokeRectXLongSharpCorners',
				type: 'Rect',
			},
			{
				variableName: 'redFillAndStrokeRectSquareSharpCorners',
				type: 'Rect',
			},
			{
				variableName: 'yellowFillAndStrokeRectSquareRoundedCorners',
				type: 'Rect',
			},
		],
	} as OutputFileFields;

	const motionCanvasCodeRenderer = new _MotionCanvasCodeRenderer();

	const found = motionCanvasCodeRenderer.render(fields);

	const wanted = `
import { Rect, View2D } from "@motion-canvas/2d";
import { createRef } from '@motion-canvas/core';

// the zero position (origin) is the center
const ZERO_POSITION = [-1920 / 2, -1080 / 2];

function scaleCoord(p: number) {
	// 1080 * (p / 285.75) should give the same result
	return 1920 * (p / 508);
}

function coordX(x: number) {
	return ZERO_POSITION[0] + scaleCoord(x);
}

function coordY(y: number) {
	return ZERO_POSITION[1] + scaleCoord(y);
}

export function rects1920By1080(view: View2D) {
	const greenFillAndStrokeRectXLongSharpCorners = createRef<Rect>();
	const redFillAndStrokeRectSquareSharpCorners = createRef<Rect>();
	const yellowFillAndStrokeRectSquareRoundedCorners = createRef<Rect>();

	view.add(<>
		{/* green-fill-and-stroke-rect-x-long-sharp-corners */}
		<Rect
			ref={greenFillAndStrokeRectXLongSharpCorners}
			width={scaleCoord(82.803673)}
			height={scaleCoord(25.728548)}
			topLeft={[coordX(9.0465326), coordY(10.700179)]}
			fill={'#2ca02c'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(1.23096)}
		/>
		{/* red-fill-and-stroke-rect-square-sharp-corners */}
		<Rect
			ref={redFillAndStrokeRectSquareSharpCorners}
			width={scaleCoord(81.960045)}
			height={scaleCoord(81.960045)}
			topLeft={[coordX(8.8836927), coordY(78.336815)]}
			fill={'#d40000'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(1.73211)}
		/>
		{/* yellow-fill-and-stroke-rect-square-rounded-corners */}
		<Rect
			ref={yellowFillAndStrokeRectSquareRoundedCorners}
			width={scaleCoord(44.620049)}
			height={scaleCoord(44.620049)}
			topLeft={[coordX(7.3198247), coordY(167.9606)]}
			fill={'#ffcc00'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(0.942981)}
			radius={scaleCoord(10.748698)}
		/>
	</>);

	return {
		greenFillAndStrokeRectXLongSharpCorners,
		redFillAndStrokeRectSquareSharpCorners,
		yellowFillAndStrokeRectSquareRoundedCorners,
	};
}
`;

	// start testing internal calls

	jsxComponent1
		.received()
		.toFileContentString('\t', 2);
	jsxComponent2
		.received()
		.toFileContentString('\t', 2);
	jsxComponent3
		.received()
		.toFileContentString('\t', 2);
	// end testing internal calls

	t.equal(found, wanted);
	t.end();
});
