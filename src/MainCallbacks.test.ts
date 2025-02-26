import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _MainCallbacks } from './MainCallbacks';
import { InkscapeSVGToMotionCanvasIO } from './InkscapeSVGToMotionCanvasIO';
import { InkscapeSVGConfig } from './mainConfig/MainConfigSchema';
import { PathWrapper } from './wrappers/PathWrapper';

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

  const pathWrapper = Substitute.for<PathWrapper>();

  pathWrapper
    .relative(
      './circles_1920_by_1080.svg',
      'rects_1920_by_1080.svg')
    .returns('not-empty');

  pathWrapper
    .relative(
      './rects_1920_by_1080.svg',
      'rects_1920_by_1080.svg')
    .returns('');

  const inkscapeSVGToMotionCanvasIO = Substitute.for<InkscapeSVGToMotionCanvasIO>();

  inkscapeSVGToMotionCanvasIO
    .generate({ ...svgConfigs[1] })
    .returns(Promise.resolve());

  const mainCallbacks = new _MainCallbacks({
    inkscapeSVGToMotionCanvasIO,
    pathWrapper,
  });

  const callback = mainCallbacks.getOnChangeCallback([...svgConfigs]);
  await callback('rects_1920_by_1080.svg');

  // start testing internal calls

  pathWrapper
    .received()
    .relative(
      './circles_1920_by_1080.svg',
      'rects_1920_by_1080.svg');

  pathWrapper
    .received()
    .relative(
      './rects_1920_by_1080.svg',
      'rects_1920_by_1080.svg');

  inkscapeSVGToMotionCanvasIO
    .received()
    .generate({ ...svgConfigs[1] });

  // end testing internal calls

  t.end();
});
