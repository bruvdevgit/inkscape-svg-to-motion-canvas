#!/usr/bin/env node

import { initFsWrapper } from './wrappers/FsWrapper.ts';
import { initTOMLWrapper } from './wrappers/TOMLWrapper.ts';
import { initMainConfigSchema } from './MainConfigSchema.ts';
import { rectsTsxCode } from './temp.ts';
import { initChokidarWrapper } from './wrappers/ChokidarWrapper.ts';

const log = console.log.bind(console);

console.log('in bin.js');
(async () => {
  const fs = initFsWrapper();
  const tomlParser = initTOMLWrapper();
  const mainConfigSchema = initMainConfigSchema();

  let callerPath = fs.cwd();
  const content = await fs.readFile(`${callerPath}/inkscapeSVGToMotionCanvasConfig.toml`);
  const tomlContent = tomlParser.parse(content);
  const config = mainConfigSchema.parse(tomlContent);

  //const content = require(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);
  //const content = loadTsConfig<CodegenConfig>(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);
  //

  const inputFilePath = config.inkscapeSVGs[0].input.filePath;
  const outputDirectoryPath = config.inkscapeSVGs[0].output.directoryPath;
  const outputFilePath = `${outputDirectoryPath}/${config.inkscapeSVGs[0].output.viewAdderFunctionName}.tsx`;

  const watcher = initChokidarWrapper().watch(inputFilePath, {
    persistent: true
  });

  watcher
    .on('change', async (path: string) => {
      log(`File ${path} has been changed`);
      //const inputFileContent = await fs.readFile(path);
      await fs.makeDirectory(outputDirectoryPath);
      await fs.writeFile(outputFilePath, rectsTsxCode);
    });


})();
