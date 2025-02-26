import { ChokidarWrapper, initChokidarWrapper } from "./wrappers/ChokidarWrapper";
import { initInkscapeSVGToMotionCanvasIO, InkscapeSVGToMotionCanvasIO } from "./InkscapeSVGToMotionCanvasIO";
import { initMainCallbacks, MainCallbacks } from "./MainCallbacks";
import { initMainConfigLoader, MainConfigLoader } from "./mainConfig/MainConfigLoader";

export interface Main {
  run(): Promise<void>;
}

export class _Main implements Main {
  constructor(public deps: {
    mainConfigLoader: MainConfigLoader,
    inkscapeSVGToMotionCanvasIO: InkscapeSVGToMotionCanvasIO,
    chokidar: ChokidarWrapper,
    callbackFactory: MainCallbacks,
  }) { }

  async run(): Promise<void> {
    const config = await this.deps.mainConfigLoader
      .load(`inkscapeSVGToMotionCanvasConfig.toml`);

    for (const svgConfig of config.inkscapeSVGs) {
      await this.deps.inkscapeSVGToMotionCanvasIO
        .generate(svgConfig);
    }

    const inputFilePaths = config.inkscapeSVGs
      .map(svg => svg.input.filePath);

    const watcher = this.deps.chokidar
      .watch(inputFilePaths, {
        persistent: true
      });

    watcher.on('change', this.deps.callbackFactory
      .getOnChangeCallback(config.inkscapeSVGs));
  }
}

export type InitMainFn = () => Main;

export const initMain = () => new _Main({
  mainConfigLoader: initMainConfigLoader(),
  inkscapeSVGToMotionCanvasIO: initInkscapeSVGToMotionCanvasIO(),
  chokidar: initChokidarWrapper(),
  callbackFactory: initMainCallbacks(),
});
