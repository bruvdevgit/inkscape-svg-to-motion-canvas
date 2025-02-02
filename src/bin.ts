#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import { cwd } from 'node:process';
import { createTOMLWrapper } from "./TOMLWrapper";
import mainConfigSchema from "./mainConfigSchema";

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  const tomlParser = createTOMLWrapper();
  let callerPath = cwd();
  const content = await fs.readFile(`${callerPath}/inkscapeSVGToMotionCanvasConfig.toml`);
  const config = tomlParser.parse(content);

  //const content = require(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);
  //const content = loadTsConfig<CodegenConfig>(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);

  console.log('->>>> ', mainConfigSchema.parse(config));
})();
