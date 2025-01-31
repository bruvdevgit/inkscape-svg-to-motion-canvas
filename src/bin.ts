#!/usr/bin/env node

import { createFsWrapper } from "./FsWrapper";

console.log('in bin.js');
(async () => {
  const fs = createFsWrapper();
  const content = await fs.readFile(fs.prefixPathWithCallerPath('/inkscapeSVGToMotionCanvasConfig.ts'));
  console.log(content);
})();
