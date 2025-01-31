#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import * as path from 'path';
import { cwd } from 'node:process';

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  let callerPath = cwd();
  const content = await fs.readFile(`${callerPath}/inkscapeSVGToMotionCanvasConfig.ts`);

  console.log('->>>> ', content);
})();
