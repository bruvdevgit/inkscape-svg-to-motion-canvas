#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import * as path from 'path';
import { cwd } from 'node:process';
import { CodegenConfig } from ".";
import { loadTsConfig } from 'config-file-ts';

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  let callerPath = cwd();
  //const content = await fs.readFile(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);
  //const content = loadTsConfig<CodegenConfig>("inkscapeSVGToMotionCanvas.config.ts");
  const content = require(`${callerPath}/inkscapeSVGToMotionCanvas.config.ts`);

  console.log('->>>> ', content);
})();
