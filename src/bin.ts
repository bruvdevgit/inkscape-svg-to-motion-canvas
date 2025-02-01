#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import { cwd } from 'node:process';
import { CodegenConfig } from ".";
import { createYAMLWrapper } from "./YAMLWrapper";

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  const yamlParser = createYAMLWrapper();
  let callerPath = cwd();
  const content = await fs.readFile(`${callerPath}/inkscapeSVGToMotionCanvasConfig.yaml`);
  const config = yamlParser.parse(content);

  //const content = require(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);
  //const content = loadTsConfig<CodegenConfig>(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);

  console.log('->>>> ', config);
})();
