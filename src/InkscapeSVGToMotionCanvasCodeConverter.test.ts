import t from 'tap';
import { _InkscapeSVGToMotionCanvasCodeConverter } from './InkscapeSVGToMotionCanvasCodeConverter';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { InkscapeSVGParser } from './inkscapeSVG/InkscapeSVGParser';
import { InkscapeSVG } from './inkscapeSVG/InkscapeSVG';
import { MotionCanvasNodeTree } from './motionCanvasNodeTree/MotionCanvasNodeTree';

t.test('convert correctly turns inkscape SVG code to Motion Canvas code', t => {
  const inkscapeSVGParser = Substitute.for<InkscapeSVGParser>();
  const sourceInkscapeSVGCode = `
<svg
   width="1920"
   height="1080"
   viewBox="0 0 508 285.75"
   version="1.1">
</svg>
`;

  const inkscapeSVG = Substitute.for<InkscapeSVG>();
  inkscapeSVGParser.parse(sourceInkscapeSVGCode).returns(inkscapeSVG);

  const motionCanvasNodeTree = Substitute.for<MotionCanvasNodeTree>();
  inkscapeSVG.toMotionCanvasNodeTree().returns(motionCanvasNodeTree);

  const resultMotionCanvasCode = `
import { Rect, View2D } from "@motion-canvas/2d";
import { createRef } from '@motion-canvas/core';

const ZERO_POSITION = [-1920 / 2, -1080 / 2];
// etc...
`;

  const viewAdderFunctionName = 'rects1920By1080';
  motionCanvasNodeTree.toFileContentString(viewAdderFunctionName)
    .returns(resultMotionCanvasCode);

  const codeConverter = new _InkscapeSVGToMotionCanvasCodeConverter({
    inkscapeSVGParser,
  });

  const found = codeConverter.convert({
    inkscapeSVG: sourceInkscapeSVGCode,
    viewAdderFunctionName: viewAdderFunctionName,
  });

  const wanted = resultMotionCanvasCode;

  // start testing internal calls

  inkscapeSVGParser
    .received()
    .parse(sourceInkscapeSVGCode);
  inkscapeSVG
    .received()
    .toMotionCanvasNodeTree();
  motionCanvasNodeTree
    .received()
    .toFileContentString(viewAdderFunctionName);

  // stop testing internal calls

  t.equal(found, wanted);
  t.end();
});
