import { InkscapeSVGConfig, MainConfig } from "./mainConfig/MainConfigSchema";
import { initInkscapeSVGLoader, InkscapeSVGLoader } from "./inkscapeSVG/InkscapeSVGLoader";
import { initPathWrapper, PathWrapper } from "./wrappers/PathWrapper";

export type OnChangeCallbackFn = (path: string) => Promise<void>;

export interface InkscapeSVGToMotionCanvasIO {
  readTranslateAndWriteAll(config: MainConfig): Promise<void>;
  getOnChangeCallbackFn(configs: InkscapeSVGConfig[]): OnChangeCallbackFn;
}

export class _InkscapeSVGToMotionCanvasIO
  implements InkscapeSVGToMotionCanvasIO {
  constructor(public deps: {
    pathWrapper: PathWrapper,
    inkscapeSVGLoader: InkscapeSVGLoader,
  },) {
  }

  async readTranslateAndWriteAll(config: MainConfig):
    Promise<void> {
    for (const svgConfig of config.inkscapeSVGs) {
      const inputFilePath = svgConfig.input.filePath;

      const inkscapeSVG = await this.deps.inkscapeSVGLoader.load(inputFilePath);

      const motionCanvasNodeTree = inkscapeSVG.toMotionCanvasNodeTree();

      await motionCanvasNodeTree.generateOutputFiles(svgConfig);
    }
  }

  getOnChangeCallbackFn(configs: InkscapeSVGConfig[]): OnChangeCallbackFn {
    return async (path: string) => {
      const config = configs
        .find(config => {
          return this.deps.pathWrapper.relative(config.input.filePath, path) == '';
        });

      if (config == null) {
        return;
      }

      const inputFilePath = config.input.filePath;
      const inkscapeSVG = await this.deps.inkscapeSVGLoader.load(inputFilePath);

      const newMotionCanvasNodeTree = inkscapeSVG.toMotionCanvasNodeTree();

      await newMotionCanvasNodeTree.generateOutputFiles(config);
    };
  }
}

export type InitInkscapeSVGToMotionCanvasIOFn
  = () => InkscapeSVGToMotionCanvasIO;

export const initInkscapeSVGToMotionCanvasIO:
  InitInkscapeSVGToMotionCanvasIOFn = () =>
    new _InkscapeSVGToMotionCanvasIO({
      pathWrapper: initPathWrapper(),
      inkscapeSVGLoader: initInkscapeSVGLoader(),
    });
