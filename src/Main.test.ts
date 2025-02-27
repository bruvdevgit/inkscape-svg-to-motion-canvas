import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { MainConfigLoader } from './mainConfig/MainConfigLoader';
import { InkscapeSVGToMotionCanvasIO, OnChangeCallbackFn } from './InkscapeSVGToMotionCanvasIO';
import { ChokidarWrapper } from './wrappers/ChokidarWrapper';
import { _Main } from './Main';
import { MainConfig } from './mainConfig/MainConfigSchema';
import { FSWatcherWrapper } from './wrappers/FSWatcherWrapper';

t.test('run runs right!', async t => {
  const mainConfigLoader = Substitute.for<MainConfigLoader>();
  const inkscapeSVGToMotionCanvasIO = Substitute.for<InkscapeSVGToMotionCanvasIO>();
  const chokidar = Substitute.for<ChokidarWrapper>();

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
    .readTranslateAndWriteAll({ ...mainConfig } as MainConfig)
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

  const onChangeCallback: OnChangeCallbackFn = (_) => Promise.resolve();

  inkscapeSVGToMotionCanvasIO
    .getOnChangeCallbackFn(mainConfig.inkscapeSVGs)
    .returns(onChangeCallback);

  const main = new _Main({
    mainConfigLoader,
    inkscapeSVGToMotionCanvasIO,
    chokidar,
  })

  await main.run();

  // start testing internal calls

  mainConfigLoader
    .received()
    .load('inkscapeSVGToMotionCanvasConfig.toml');

  inkscapeSVGToMotionCanvasIO
    .received()
    .readTranslateAndWriteAll({ ...mainConfig } as MainConfig)

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
