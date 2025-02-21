import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _MainCallbacks } from './MainCallbacks.ts';
import { InkscapeSVGToMotionCanvasIO } from './InkscapeSVGToMotionCanvasIO.ts';
import { InkscapeSVGConfig } from './mainConfig/MainConfigSchema.ts';

t.test('getOnChangeCallback gives a function with the right behaviour', async t => {
  const svgConfigs: InkscapeSVGConfig[] = [
    {
      input: {
        filePath: "./circles_1920_by_1080.svg",
      },
      output: {
        directoryPath: "./src/inkscapeSVGGenerated",
        viewAdderFunctionName: 'circles1920By1080',
      }
    },
    {
      input: {
        filePath: "./rects_1920_by_1080.svg",
      },
      output: {
        directoryPath: "./src/inkscapeSVGGenerated",
        viewAdderFunctionName: 'rects1920By1080',
      }
    },
    {
      input: {
        filePath: "./landing_page_lg.svg",
      },
      output: {
        directoryPath: "./src/pagesOutput",
        viewAdderFunctionName: 'landingPageLarge',
      }
    },
  ];

  const inkscapeSVGToMotionCanvasIO = Substitute.for<InkscapeSVGToMotionCanvasIO>();

  inkscapeSVGToMotionCanvasIO
    .generate({ ...svgConfigs[1] })
    .returns(Promise.resolve());

  const mainCallbacks = new _MainCallbacks({
    inkscapeSVGToMotionCanvasIO,
  });

  const callback = mainCallbacks.getOnChangeCallback([...svgConfigs]);
  await callback('./rects_1920_by_1080.svg');

  // start testing internal calls

  inkscapeSVGToMotionCanvasIO
    .received()
    .generate({ ...svgConfigs[1] });

  // end testing internal calls

  t.end();
});
