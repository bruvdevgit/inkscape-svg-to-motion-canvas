import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { MainConfigLoader } from './mainConfig/MainConfigLoader.ts';
import { InkscapeSVGToMotionCanvasIO } from './InkscapeSVGToMotionCanvasIO.ts';
import { ChokidarWrapper } from './wrappers/ChokidarWrapper.ts';
import { CallbackFn, MainCallbacks } from './MainCallbacks.ts';
import { _Main } from './Main.ts';
import { MainConfig } from './mainConfig/MainConfigSchema.ts';
import { FSWatcherWrapper } from './wrappers/FSWatcherWrapper.ts';

t.test('run runs right!', async t => {
  const mainConfigLoader = Substitute.for<MainConfigLoader>();
  const inkscapeSVGToMotionCanvasIO = Substitute.for<InkscapeSVGToMotionCanvasIO>();
  const chokidar = Substitute.for<ChokidarWrapper>();
  const callbackFactory = Substitute.for<MainCallbacks>();

  const mainConfig: MainConfig = {
    inkscapeSVGs: [
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
    ]
  };

  mainConfigLoader
    .load('inkscapeSVGToMotionCanvasConfig.toml')
    .returns(Promise.resolve({ ...mainConfig } as MainConfig));

  inkscapeSVGToMotionCanvasIO
    .generate(Arg.any())
    .returns(Promise.resolve());

  const fsWatcher = Substitute.for<FSWatcherWrapper>();
  chokidar.watch([
    "./circles_1920_by_1080.svg",
    "./rects_1920_by_1080.svg",
    "./landing_page_lg.svg",
  ], {
    // don't let the program end while watching
    persistent: true
  })
    .returns(fsWatcher);

  const onChangeCallback: CallbackFn = (_) => Promise.resolve();

  callbackFactory
    .getOnChangeCallback([...mainConfig.inkscapeSVGs])
    .returns(onChangeCallback);

  const main = new _Main({
    mainConfigLoader,
    inkscapeSVGToMotionCanvasIO,
    chokidar,
    callbackFactory,
  })

  await main.run();

  // start testing internal calls

  mainConfigLoader
    .received()
    .load('inkscapeSVGToMotionCanvasConfig.toml');

  inkscapeSVGToMotionCanvasIO
    .received()
    .generate(mainConfig.inkscapeSVGs[0]);

  inkscapeSVGToMotionCanvasIO
    .received()
    .generate(mainConfig.inkscapeSVGs[1]);

  inkscapeSVGToMotionCanvasIO
    .received()
    .generate(mainConfig.inkscapeSVGs[2]);

  chokidar
    .received()
    .watch([
      "./circles_1920_by_1080.svg",
      "./rects_1920_by_1080.svg",
      "./landing_page_lg.svg",
    ], {
      // don't let the program end while watching
      persistent: true
    });

  fsWatcher
    .received().on('change', onChangeCallback);
  // end testing internal calls


  t.end();
});
