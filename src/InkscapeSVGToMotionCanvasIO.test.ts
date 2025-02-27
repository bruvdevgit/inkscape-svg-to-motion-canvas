import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _InkscapeSVGToMotionCanvasIO, MotionCanvasNodeTreeAndConfig } from './InkscapeSVGToMotionCanvasIO';
import { InkscapeSVGToMotionCanvasCodeConverter } from './InkscapeSVGToMotionCanvasCodeConverter';
import { FsWrapper } from './wrappers/FsWrapper';
import { InkscapeSVGConfig, MainConfig } from './mainConfig/MainConfigSchema';
import { PathWrapper } from './wrappers/PathWrapper';
import { InkscapeSVGLoader } from './inkscapeSVG/InkscapeSVGLoader';
import { InkscapeSVG } from './inkscapeSVG/InkscapeSVG';
import { MotionCanvasNodeTree } from './motionCanvasNodeTree/MotionCanvasNodeTree';

t.test('readTranslateAndWriteAll reads InkscapeSVGs, translates, and writes each',
  async t => {
    const config1: InkscapeSVGConfig = {
      input: {
        filePath: "./circles_1920_by_1080.svg",
      },
      output: {
        directoryPath: "./src/inkscapeSVGGenerated",
        viewAdderFunctionName: 'circles1920By1080',
      }
    };

    const config2: InkscapeSVGConfig = {
      input: {
        filePath: "./rects_1920_by_1080.svg",
      },
      output: {
        directoryPath: "./src/inkscapeSVGGenerated",
        viewAdderFunctionName: 'rects1920By1080',
      }
    }

    const config3: InkscapeSVGConfig = {
      input: {
        filePath: "./landing_page_lg.svg",
      },
      output: {
        directoryPath: "./src/pagesOutput",
        viewAdderFunctionName: 'landingPageLarge',
      }
    };


    const inkscapeSVGLoader = Substitute.for<InkscapeSVGLoader>();

    // start 1
    const inkscapeSVG1 = Substitute.for<InkscapeSVG>();
    inkscapeSVGLoader
      .load("./circles_1920_by_1080.svg")
      .returns(Promise.resolve(inkscapeSVG1));

    const motionCanvasNodeTree1 = Substitute.for<MotionCanvasNodeTree>();
    inkscapeSVG1
      .toMotionCanvasNodeTree()
      .returns(motionCanvasNodeTree1);

    motionCanvasNodeTree1
      .generateOutputFiles(config1)
      .returns(Promise.resolve());
    // end 1
    // start 2
    const inkscapeSVG2 = Substitute.for<InkscapeSVG>();
    inkscapeSVGLoader
      .load("./rects_1920_by_1080.svg")
      .returns(Promise.resolve(inkscapeSVG2));

    const motionCanvasNodeTree2 = Substitute.for<MotionCanvasNodeTree>();
    inkscapeSVG2
      .toMotionCanvasNodeTree()
      .returns(motionCanvasNodeTree2);

    motionCanvasNodeTree2
      .generateOutputFiles(config2)
      .returns(Promise.resolve());
    // end 2
    // start 3
    const inkscapeSVG3 = Substitute.for<InkscapeSVG>();
    inkscapeSVGLoader
      .load("./landing_page_lg.svg")
      .returns(Promise.resolve(inkscapeSVG3));

    const motionCanvasNodeTree3 = Substitute.for<MotionCanvasNodeTree>();
    inkscapeSVG3
      .toMotionCanvasNodeTree()
      .returns(motionCanvasNodeTree3);

    motionCanvasNodeTree3
      .generateOutputFiles(config3)
      .returns(Promise.resolve());
    // end 3

    const mainConfig: MainConfig = {
      inkscapeSVGs: [
        config1,
        config2,
        config3,
      ]
    };

    const svgToMotionCanvasIO = new _InkscapeSVGToMotionCanvasIO({
      pathWrapper: Substitute.for<PathWrapper>(),
      inkscapeSVGLoader,
    });

    const found = await svgToMotionCanvasIO.readTranslateAndWriteAll(mainConfig)
    const wanted = [
      {
        config: config1,
        motionCanvasNodeTree: motionCanvasNodeTree1,
      },
      {
        config: config2,
        motionCanvasNodeTree: motionCanvasNodeTree2,
      },
      {
        config: config3,
        motionCanvasNodeTree: motionCanvasNodeTree3,
      },
    ] satisfies MotionCanvasNodeTreeAndConfig[];

    // start testing internal

    // start 1
    inkscapeSVGLoader
      .received()
      .load("./circles_1920_by_1080.svg");

    inkscapeSVG1
      .received()
      .toMotionCanvasNodeTree();

    motionCanvasNodeTree1
      .received()
      .generateOutputFiles(config1);
    // end 1
    // start 2
    inkscapeSVGLoader
      .received()
      .load("./circles_1920_by_1080.svg");

    inkscapeSVG2
      .received()
      .toMotionCanvasNodeTree();

    motionCanvasNodeTree2
      .received()
      .generateOutputFiles(config2);
    // end 2
    // start 3
    inkscapeSVGLoader
      .received()
      .load("./circles_1920_by_1080.svg");

    inkscapeSVG3
      .received()
      .toMotionCanvasNodeTree();

    motionCanvasNodeTree3
      .received()
      .generateOutputFiles(config3);
    // end 3

    // end testing internal
    t.same(found, wanted);
    t.end();
  });

t.test('getOnChangeCallback gives a function with the right behaviour', async t => {
  const config1: InkscapeSVGConfig = {
    input: {
      filePath: "./circles_1920_by_1080.svg",
    },
    output: {
      directoryPath: "./src/inkscapeSVGGenerated",
      viewAdderFunctionName: 'circles1920By1080',
    }
  };
  const tree1 = Substitute.for<MotionCanvasNodeTree>();

  const config2: InkscapeSVGConfig = {
    input: {
      filePath: "./rects_1920_by_1080.svg",
    },
    output: {
      directoryPath: "./src/inkscapeSVGGenerated",
      viewAdderFunctionName: 'rects1920By1080',
    }
  }
  const tree2 = Substitute.for<MotionCanvasNodeTree>();

  const config3: InkscapeSVGConfig = {
    input: {
      filePath: "./landing_page_lg.svg",
    },
    output: {
      directoryPath: "./src/pagesOutput",
      viewAdderFunctionName: 'landingPageLarge',
    }
  };
  const tree3 = Substitute.for<MotionCanvasNodeTree>();

  const svgs: MotionCanvasNodeTreeAndConfig[] = [
    { config: config1, motionCanvasNodeTree: tree1 },
    { config: config2, motionCanvasNodeTree: tree2 },
    { config: config3, motionCanvasNodeTree: tree3 },
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

  tree2
    .generateOutputFiles(config2)
    .returns(Promise.resolve());

  const svgToMotionCanvasIO = new _InkscapeSVGToMotionCanvasIO({
    pathWrapper,
    inkscapeSVGLoader: Substitute.for<InkscapeSVGLoader>(),
  });

  const callback = svgToMotionCanvasIO.getOnChangeCallbackFn(svgs);
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

  tree2
    .received()
    .generateOutputFiles(config2)

  // end testing internal calls

  t.end();
});

