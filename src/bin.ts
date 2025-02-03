#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import { cwd } from 'node:process';
import { createTOMLWrapper } from "./TOMLWrapper";
import mainConfigSchema, { MainConfig } from "./mainConfigSchema";
import chokidar from 'chokidar';
import { makeDirectory } from 'make-dir';
import { rectsTsxCode } from "./temp";

const log = console.log.bind(console);

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  const tomlParser = createTOMLWrapper();
  let callerPath = cwd();
  const content = await fs.readFile(`${callerPath}/inkscapeSVGToMotionCanvasConfig.toml`);
  const tomlContent = tomlParser.parse(content);
  const config = mainConfigSchema.parse(tomlContent);

  //const content = require(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);
  //const content = loadTsConfig<CodegenConfig>(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);
  //

  const inputFilePath = config.inkscapeSVGs[0].input.filePath;
  const outputDirectoryPath = config.inkscapeSVGs[0].output.directoryPath;
  const outputFilePath = `${outputDirectoryPath}/${config.inkscapeSVGs[0].output.viewAdderFunctionName}.tsx`;

  const watcher = chokidar.watch(inputFilePath, {
    persistent: true
  });

  watcher
    .on('change', async path => {
      log(`File ${path} has been changed`);
      //const inputFileContent = await fs.readFile(path);
      await makeDirectory(outputDirectoryPath);
      await fs.writeFile(outputFilePath, rectsTsxCode);
    });


})();
