import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _InkscapeSVGToMotionCanvasIO } from './InkscapeSVGToMotionCanvasIO.ts';
import { InkscapeSVGToMotionCanvasCodeConverter } from './InkscapeSVGToMotionCanvasCodeConverter.ts';
import { FsWrapper } from './wrappers/FsWrapper.ts';
import { InkscapeSVGConfig } from './mainConfig/MainConfigSchema.ts';

t.test('generate reads InkscapeSVG, translates it and then writes the Motion Canvas result',
  async t => {
    const inkscapeSVGToMotionCanvasCodeConverter
      = Substitute.for<InkscapeSVGToMotionCanvasCodeConverter>();
    const fsWrapper = Substitute.for<FsWrapper>();

    const config: InkscapeSVGConfig = {
      input: {
        filePath: "./landing_page_lg.svg",
      },
      output: {
        directoryPath: "./src/pagesOutput",
        viewAdderFunctionName: 'landingPageLarge',
      }
    };

    const svgContent = `<svg
   width="1920"
   height="1080"
   viewBox="0 0 508 285.75"
   version="1.1">
</svg>
`;

    const motionCanvasCodeContent = `
// This line is to trigger recompilation 1738583210676
import { Rect, View2D } from "@motion-canvas/2d";
import { createRef } from '@motion-canvas/core';

const ZERO_POSITION = [-1920 / 2, -1080 / 2];

function scaleCoord(p: number) {
	// 1080 * (p / 285.75) should give the same result
	return 1920 * (p / 508);
}`;

    fsWrapper.readFile(config.input.filePath)
      .returns(Promise.resolve(svgContent));


    inkscapeSVGToMotionCanvasCodeConverter
      .convert({
        inkscapeSVG: svgContent,
        viewAdderFunctionName:
          config.output.viewAdderFunctionName,
      }).returns(motionCanvasCodeContent);

    fsWrapper.writeFile(
      `${config.output.directoryPath}/${config.output.viewAdderFunctionName}.tsx`,
      motionCanvasCodeContent)
      .returns(Promise.resolve());

    const inkscapeSVGToMotionCanvasIO = new _InkscapeSVGToMotionCanvasIO({
      converter: inkscapeSVGToMotionCanvasCodeConverter,
      fs: fsWrapper,
    });

    await inkscapeSVGToMotionCanvasIO.generate(config);

    // start testing internal calls


    fsWrapper
      .received()
      .readFile(config.input.filePath);


    inkscapeSVGToMotionCanvasCodeConverter
      .received()
      .convert({
        inkscapeSVG: svgContent,
        viewAdderFunctionName:
          config.output.viewAdderFunctionName,
      });

    fsWrapper
      .received()
      .writeFile(
        `${config.output.directoryPath}/${config.output.viewAdderFunctionName}.tsx`,
        motionCanvasCodeContent);

    // end testing internal calls

    t.end();
  });
