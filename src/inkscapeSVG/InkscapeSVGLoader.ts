import { PathLike } from "fs";
import { InkscapeSVG } from "./InkscapeSVG";
import { FsWrapper, initFsWrapper } from "../wrappers/FsWrapper";
import { initInkscapeSVGParser, InkscapeSVGParser } from "./InkscapeSVGParser";

export interface InkscapeSVGLoader {
  load(inputFilePath: PathLike): Promise<InkscapeSVG>;
}

export class _InkscapeSVGLoader implements InkscapeSVGLoader {
  constructor(public deps: {
    fs: FsWrapper,
    inkscapeSVGParser: InkscapeSVGParser,
  }) { }

  async load(inputFilePath: PathLike): Promise<InkscapeSVG> {
    const svgContent = await this.deps.fs.readFile(inputFilePath);
    const inkscapeSVG = this.deps.inkscapeSVGParser.parse(svgContent);
    return inkscapeSVG;
  }
}

export type InitInkscapeSVGLoaderFn = () => InkscapeSVGLoader;

export const initInkscapeSVGLoader = () => new _InkscapeSVGLoader({
  fs: initFsWrapper(),
  inkscapeSVGParser: initInkscapeSVGParser(),
});
