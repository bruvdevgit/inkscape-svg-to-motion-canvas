#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import * as path from 'path';
import { cwd } from 'node:process';

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  let callerPath = cwd();
  console.log(`callerPath: ${callerPath}`);

  if (callerPath == undefined) return;
  const callerDir = path.dirname(callerPath);
  const content = await fs.readFile(`${callerDir}/inkscapeSVGToMotionCanvasConfig.ts`);
  console.log(content);
})();
