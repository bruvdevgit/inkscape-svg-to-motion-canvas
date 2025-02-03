const rectsTsxCode = `
// This line is to trigger recompilation ${Date.now()}
import { Rect, View2D } from "@motion-canvas/2d";
import { createRef } from '@motion-canvas/core';

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
	const purpleFillAndStrokeRectXLongRoundedCorners = createRef<Rect>();
	const brownFillAndStrokeRectSquareCircular = createRef<Rect>();
	const blueFillAndStrokeRectYLongSharpCorners = createRef<Rect>();
	const greenStrokeOnlyRectXLongSharpCorners = createRef<Rect>();
	const redStrokeOnlyRectSquareSharpCorners = createRef<Rect>();
	const yellowStrokeOnlyRectSquareRoundedCorners = createRef<Rect>();
	const brownStrokeOnlyRectSquareCircular = createRef<Rect>();
	const purpleStrokeOnlyRectXLongRoundedCorners = createRef<Rect>();
	const blueStrokeOnlyRectYLongSharpCorners = createRef<Rect>();
	const greenFillOnlyRectXLongSharpCorners = createRef<Rect>();
	const redFillOnlyRectSquareSharpCorners = createRef<Rect>();
	const yellowFillOnlyRectSquareRoundedCorners = createRef<Rect>();
	const brownFillOnlyRectSquareCircular = createRef<Rect>();
	const purpleFillOnlyRectXLongRoundedCorners = createRef<Rect>();
	const blueFillOnlyRectYLongSharpCorners = createRef<Rect>();

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
		{/* brown-fill-and-stroke-rect-square-circular */}
		<Rect
			ref={brownFillAndStrokeRectSquareCircular}
			width={scaleCoord(44.620049)}
			height={scaleCoord(44.620049)}
			topLeft={[coordX(7.3198218), coordY(218.05432)]}
			fill={'#c87137'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(0.942981)}
			radius={scaleCoord(22.310024)}
		/>
		{/* purple-fill-and-stroke-rect-x-long-rounded-corners */}
		<Rect
			ref={purpleFillAndStrokeRectXLongRoundedCorners}
			width={scaleCoord(84.983978)}
			height={scaleCoord(20.706318)}
			topLeft={[coordX(6.9583092), coordY(46.336018)]}
			fill={'#c83782'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(1.18864)}
			radius={scaleCoord(10.353159)}
		/>
		{/* blue-fill-and-stroke-rect-y-long-sharp-corners */}
		<Rect
			ref={blueFillAndStrokeRectYLongSharpCorners}
			width={scaleCoord(33.072918)}
			height={scaleCoord(93.430992)}
			topLeft={[coordX(56.762016), coordY(168.66684)]}
			fill={'#37bbc8'}
			stroke={'#1300ff'}
			lineWidth={scaleCoord(1.328)}
		/>
		{/* green-stroke-only-rect-x-long-sharp-corners */}
		<Rect
			ref={greenStrokeOnlyRectXLongSharpCorners}
			width={scaleCoord(85.706055)}
			height={scaleCoord(25.70767)}
			topLeft={[coordX(195.82663), coordY(10.639688)]}
			stroke={'#2ca02c'}
			lineWidth={scaleCoord(1.25184)}
		/>
		{/* red-stroke-only-rect-square-sharp-corners */}
		<Rect
			ref={redStrokeOnlyRectSquareSharpCorners}
			width={scaleCoord(56.121857)}
			height={scaleCoord(56.121857)}
			topLeft={[coordX(207.88141), coordY(93.417191)]}
			stroke={'#d40000'}
			lineWidth={scaleCoord(10.55608125)}
		/>
		{/* yellow-stroke-only-rect-square-rounded-corners */}
		<Rect
			ref={yellowStrokeOnlyRectSquareRoundedCorners}
			width={scaleCoord(31.228392)}
			height={scaleCoord(31.228392)}
			topLeft={[coordX(199.78725), coordY(176.33945)]}
			stroke={'#ffcc00'}
			lineWidth={scaleCoord(13.1177)}
			radius={scaleCoord(7.5227299)}
		/>
		{/* brown-stroke-only-rect-square-circular */}
		<Rect
			ref={brownStrokeOnlyRectSquareCircular}
			width={scaleCoord(26.646238)}
			height={scaleCoord(26.646238)}
			topLeft={[coordX(202.51251), coordY(227.94759)]}
			stroke={'#c87137'}
			lineWidth={scaleCoord(19.5042)}
			radius={scaleCoord(13.323119)}
		/>
		{/* purple-stroke-only-rect-x-long-rounded-corners */}
		<Rect
			ref={purpleStrokeOnlyRectXLongRoundedCorners}
			width={scaleCoord(83.472107)}
			height={scaleCoord(21.465435)}
			topLeft={[coordX(196.5302), coordY(45.627014)]}
			stroke={'#c83782'}
			lineWidth={scaleCoord(4.14621)}
			radius={scaleCoord(10.732718)}
		/>
		{/* blue-stroke-only-rect-y-long-sharp-corners */}
		<Rect
			ref={blueStrokeOnlyRectYLongSharpCorners}
			width={scaleCoord(17.821806)}
			height={scaleCoord(75.46225)}
			topLeft={[coordX(255.37695), coordY(181.09677)]}
			stroke={'#37bbc8'}
			lineWidth={scaleCoord(22.449)}
		/>
		{/* green-fill-only-rect-x-long-sharp-corners */}
		<Rect
			ref={greenFillOnlyRectXLongSharpCorners}
			width={scaleCoord(82.803673)}
			height={scaleCoord(25.728548)}
			topLeft={[coordX(103.76017), coordY(26.485786)]}
			fill={'#2ca02c'}
			lineWidth={scaleCoord(1.23096)}
		/>
		{/* red-fill-only-rect-square-sharp-corners */}
		<Rect
			ref={redFillOnlyRectSquareSharpCorners}
			width={scaleCoord(81.960045)}
			height={scaleCoord(81.960045)}
			topLeft={[coordX(103.59733), coordY(94.122421)]}
			fill={'#d40000'}
			lineWidth={scaleCoord(1.73211)}
		/>
		{/* yellow-fill-only-rect-square-rounded-corners */}
		<Rect
			ref={yellowFillOnlyRectSquareRoundedCorners}
			width={scaleCoord(44.620049)}
			height={scaleCoord(44.620049)}
			topLeft={[coordX(102.03346), coordY(183.74622)]}
			fill={'#ffcc00'}
			lineWidth={scaleCoord(1.73211)}
			radius={scaleCoord(10.748698)}
		/>
		{/* brown-fill-only-rect-square-circular */}
		<Rect
			ref={brownFillOnlyRectSquareCircular}
			width={scaleCoord(44.620049)}
			height={scaleCoord(44.620049)}
			topLeft={[coordX(102.03346), coordY(233.83994)]}
			fill={'#c87137'}
			lineWidth={scaleCoord(0.942981)}
			radius={scaleCoord(22.310024)}
		/>
		{/* purple-fill-only-rect-x-long-rounded-corners */}
		<Rect
			ref={purpleFillOnlyRectXLongRoundedCorners}
			width={scaleCoord(84.983978)}
			height={scaleCoord(20.706318)}
			topLeft={[coordX(101.67195), coordY(62.121624)]}
			fill={'#c83782'}
			lineWidth={scaleCoord(1.18864)}
			radius={scaleCoord(10.353159)}
		/>
		{/* blue-fill-only-rect-y-long-sharp-corners */}
		<Rect
			ref={blueFillOnlyRectYLongSharpCorners}
			width={scaleCoord(33.072918)}
			height={scaleCoord(93.430992)}
			topLeft={[coordX(151.47566), coordY(184.45245)]}
			fill={'#37bbc8'}
			lineWidth={scaleCoord(1.328)}
		/>
	</>);

	return {
		greenFillAndStrokeRectXLongSharpCorners,
		redFillAndStrokeRectSquareSharpCorners,
		yellowFillAndStrokeRectSquareRoundedCorners,
		purpleFillAndStrokeRectXLongRoundedCorners,
		brownFillAndStrokeRectSquareCircular,
		blueFillAndStrokeRectYLongSharpCorners,
		greenStrokeOnlyRectXLongSharpCorners,
		redStrokeOnlyRectSquareSharpCorners,
		yellowStrokeOnlyRectSquareRoundedCorners,
		brownStrokeOnlyRectSquareCircular,
		purpleStrokeOnlyRectXLongRoundedCorners,
		blueStrokeOnlyRectYLongSharpCorners,
		greenFillOnlyRectXLongSharpCorners,
		redFillOnlyRectSquareSharpCorners,
		yellowFillOnlyRectSquareRoundedCorners,
		brownFillOnlyRectSquareCircular,
		purpleFillOnlyRectXLongRoundedCorners,
		blueFillOnlyRectYLongSharpCorners,
	};
}

`;

export { rectsTsxCode };
