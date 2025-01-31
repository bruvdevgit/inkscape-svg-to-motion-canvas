#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import callerCallsite from 'caller-callsite';
import * as path from 'path';

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  let callerPath = callerCallsite()?.getFileName();
  console.log(`callerPath: ${callerPath}`);
  callerPath = callerCallsite({ depth: 1 })?.getFileName();
  console.log(`callerPath{ depth: 1 }: ${callerPath}`);
  callerPath = callerCallsite({ depth: 2 })?.getFileName();
  console.log(`callerPath{ depth: 2 }: ${callerPath}`);

  if (callerPath == undefined) return;
  const callerDir = path.dirname(callerPath);
  const content = await fs.readFile(`${callerDir}/inkscapeSVGToMotionCanvasConfig.ts`);
  console.log(content);
})();
