#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";
import callerCallsite from 'caller-callsite';
import * as path from 'path';

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  const callerPath = callerCallsite()?.getFileName();
  if (callerPath == undefined) return;
  const callerDir = path.dirname(callerPath);
  const content = await fs.readFile(`${callerDir}/inkscapeSVGToMotionCanvasConfig.ts`);
  console.log(content);
})();
