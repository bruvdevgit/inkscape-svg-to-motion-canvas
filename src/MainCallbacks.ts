import { initInkscapeSVGToMotionCanvasIO, InkscapeSVGToMotionCanvasIO } from "./InkscapeSVGToMotionCanvasIO.ts";
import { InkscapeSVGConfig } from "./mainConfig/MainConfigSchema";
import { initPathWrapper } from "./wrappers/PathWrapper.ts";

export type CallbackFn = (path: string) => Promise<void>;

export interface MainCallbacks {
  getOnChangeCallback(svgConfigs: InkscapeSVGConfig[]): CallbackFn;
}

export class _MainCallbacks implements MainCallbacks {
  constructor(public deps: {
    inkscapeSVGToMotionCanvasIO: InkscapeSVGToMotionCanvasIO,
  }) { }

  getOnChangeCallback(svgConfigs: InkscapeSVGConfig[]): CallbackFn {
    console.log('in getOnChangeCallback');
    const pathWrapper = initPathWrapper();
    return async (path: string) => {
      console.log('in getOnChangeCallback');
      const matchingConfig = svgConfigs
        .find(svg => {
          console.log(`${svg.input.filePath} == ${path}`);
          return pathWrapper.relative(pathWrapper.normalize(svg.input.filePath),
            pathWrapper.normalize(path)) == '';
        });
      console.log('in getOnChangeCallback matchingConfig = ', matchingConfig);

      if (matchingConfig == null) {
        console.log('in getOnChangeCallback: aborting because no matchingConfig');
        return;
      }

      await this.deps.inkscapeSVGToMotionCanvasIO
        .generate(matchingConfig);
    };
  }
}

export type InitMainCallbacksFn
  = () => MainCallbacks;

export const initMainCallbacks: InitMainCallbacksFn =
  () => new _MainCallbacks({
    inkscapeSVGToMotionCanvasIO: initInkscapeSVGToMotionCanvasIO(),
  });
