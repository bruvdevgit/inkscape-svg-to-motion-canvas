import { initInkscapeSVGParser, InkscapeSVGParser } from "./inkscapeSVG/InkscapeSVGParser.ts";

interface ConvertFnArgs {
  inkscapeSVG: string;
  viewAdderFunctionName: string;
}

export interface InkscapeSVGToMotionCanvasCodeConverter {
  convert(args: ConvertFnArgs): string;
}

export class _InkscapeSVGToMotionCanvasCodeConverter
  implements InkscapeSVGToMotionCanvasCodeConverter {
  constructor(public deps: {
    inkscapeSVGParser: InkscapeSVGParser,
  },) {
  }

  convert(args: ConvertFnArgs): string {
    const inkscapeSVG = this.deps.inkscapeSVGParser.parse(args.inkscapeSVG);
    const motionCanvasNodeTree = inkscapeSVG.toMotionCanvasNodeTree();
    const motionCanvasCodeContent = motionCanvasNodeTree
      .toFileContentString(args.viewAdderFunctionName);
    return motionCanvasCodeContent;
  }
}

export type InitInkscapeSVGToMotionCanvasCodeConverterFn
  = () => InkscapeSVGToMotionCanvasCodeConverter;

export const initInkscapeSVGToMotionCanvasCodeConverter:
  InitInkscapeSVGToMotionCanvasCodeConverterFn = () =>
    new _InkscapeSVGToMotionCanvasCodeConverter({
      inkscapeSVGParser: initInkscapeSVGParser(),
    });
