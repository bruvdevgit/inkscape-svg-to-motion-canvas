import { InkscapeSVGConfig, MainConfig } from "./mainConfig/MainConfigSchema";
import { MotionCanvasNodeTree } from "./motionCanvasNodeTree/MotionCanvasNodeTree";
import { initInkscapeSVGLoader, InkscapeSVGLoader } from "./inkscapeSVG/InkscapeSVGLoader";
import { initPathWrapper, PathWrapper } from "./wrappers/PathWrapper";

export interface MotionCanvasNodeTreeAndConfig {
  config: InkscapeSVGConfig,
  motionCanvasNodeTree: MotionCanvasNodeTree
};
export type OnChangeCallbackFn = (path: string) => Promise<void>;

export interface InkscapeSVGToMotionCanvasIO {
  readTranslateAndWriteAll(config: MainConfig): Promise<MotionCanvasNodeTreeAndConfig[]>;
  getOnChangeCallbackFn(svgs: MotionCanvasNodeTreeAndConfig[]): OnChangeCallbackFn;
}

export class _InkscapeSVGToMotionCanvasIO
  implements InkscapeSVGToMotionCanvasIO {
  constructor(public deps: {
    pathWrapper: PathWrapper,
    inkscapeSVGLoader: InkscapeSVGLoader,
  },) {
  }

  async readTranslateAndWriteAll(config: MainConfig):
    Promise<MotionCanvasNodeTreeAndConfig[]> {
    const treeAndConfig: MotionCanvasNodeTreeAndConfig[] = [];
    for (const svgConfig of config.inkscapeSVGs) {
      const inputFilePath = svgConfig.input.filePath;

      const inkscapeSVG = await this.deps.inkscapeSVGLoader.load(inputFilePath);

      const motionCanvasNodeTree = inkscapeSVG.toMotionCanvasNodeTree();

      treeAndConfig.push({ motionCanvasNodeTree, config: svgConfig });

      await motionCanvasNodeTree.generateOutputFiles(svgConfig);
    }
    return treeAndConfig;

  }

  getOnChangeCallbackFn(svgs: MotionCanvasNodeTreeAndConfig[]): OnChangeCallbackFn {
    return async (path: string) => {
      const find = svgs
        .find(svg => {
          return this.deps.pathWrapper.relative(svg.config.input.filePath, path) == '';
        });

      if (find == null) {
        return;
      }

      await find.motionCanvasNodeTree.generateOutputFiles(find.config);
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
