import { FsWrapper, initFsWrapper } from "./wrappers/FsWrapper";
import {
  initInkscapeSVGToMotionCanvasCodeConverter,
  InkscapeSVGToMotionCanvasCodeConverter
} from "./InkscapeSVGToMotionCanvasCodeConverter";
import { InkscapeSVGConfig } from "./mainConfig/MainConfigSchema";

export interface InkscapeSVGToMotionCanvasIO {
  generate(config: InkscapeSVGConfig): Promise<void>;
}

export class _InkscapeSVGToMotionCanvasIO
  implements InkscapeSVGToMotionCanvasIO {
  constructor(public deps: {
    converter: InkscapeSVGToMotionCanvasCodeConverter
    fs: FsWrapper,
  },) {
  }

  async generate(config: InkscapeSVGConfig): Promise<void> {
    const inputFilePath = config.input.filePath;
    const svgContent = await this.deps.fs.readFile(inputFilePath);

    const viewAdderFunctionName = config.output.viewAdderFunctionName;

    const motionCanvasCodeContent
      = this.deps.converter.convert({
        inkscapeSVG: svgContent,
        viewAdderFunctionName
      });

    const outputDirectoryPath = config.output.directoryPath;

    const outputFilePath = `${outputDirectoryPath}/${viewAdderFunctionName}.tsx`;

    await this.deps.fs.writeFile(outputFilePath, motionCanvasCodeContent);
  }
}

export type InitInkscapeSVGToMotionCanvasIOFn
  = () => InkscapeSVGToMotionCanvasIO;

export const initInkscapeSVGToMotionCanvasIO:
  InitInkscapeSVGToMotionCanvasIOFn = () =>
    new _InkscapeSVGToMotionCanvasIO({
      converter: initInkscapeSVGToMotionCanvasCodeConverter(),
      fs: initFsWrapper(),
    });
