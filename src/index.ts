type InkscapeSVGOptions = {
  input: {
    inkscapeSVGSrc: string
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
