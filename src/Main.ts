import { ChokidarWrapper, initChokidarWrapper } from "./wrappers/ChokidarWrapper";
import { initMainConfigLoader, MainConfigLoader } from "./mainConfig/MainConfigLoader";
import { FsWrapper, initFsWrapper } from "./wrappers/FsWrapper";
import { initInkscapeSVGParser, InkscapeSVGParser } from "./inkscapeSVG/InkscapeSVGParser";
import { initInkscapeSVGLoader, InkscapeSVGLoader } from "./inkscapeSVG/InkscapeSVGLoader";
import { initInkscapeSVGToMotionCanvasIO, InkscapeSVGToMotionCanvasIO, MotionCanvasNodeTreeAndConfig } from "./InkscapeSVGToMotionCanvasIO";

export interface Main {
  run(): Promise<void>;
}

export class _Main implements Main {
  constructor(public deps: {
    mainConfigLoader: MainConfigLoader,
    chokidar: ChokidarWrapper,
    inkscapeSVGToMotionCanvasIO: InkscapeSVGToMotionCanvasIO,
  }) { }

  async run(): Promise<void> {
    const config = await this.deps.mainConfigLoader
      // TODO: change to svgToMotionCanvasConfig.toml
      .load(`inkscapeSVGToMotionCanvasConfig.toml`);

    const treeAndConfig: MotionCanvasNodeTreeAndConfig[]
      = await this.deps.inkscapeSVGToMotionCanvasIO
        .readTranslateAndWriteAll(config);

    const inputFilePaths = config.inkscapeSVGs
      .map(svg => svg.input.filePath);

    const watcher = this.deps.chokidar
      .watch(inputFilePaths, {
        persistent: true
      });

    watcher.on('change',
      this.deps.inkscapeSVGToMotionCanvasIO
        .getOnChangeCallbackFn(treeAndConfig));
  }
}

export type InitMainFn = () => Main;

export const initMain = () => new _Main({
  mainConfigLoader: initMainConfigLoader(),
  chokidar: initChokidarWrapper(),
  inkscapeSVGToMotionCanvasIO: initInkscapeSVGToMotionCanvasIO(),
});
