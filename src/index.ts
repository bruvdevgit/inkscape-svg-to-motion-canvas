export { CustomCircle } from './CustomCircle';

type InkscapeSVGOptions = {
  input: {
    filePath: string
  },
  output: {
    viewAdderFunctionName: string,
    directoryPath: string,
  },
}
export type CodegenConfig = {
  inkscapeSVGs: InkscapeSVGOptions[],
}

export function helloNpm() {
  return "hello NPM"
}
