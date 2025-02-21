#!/usr/bin/env node

import { initMain } from "./Main";

console.log('in bin.js');
(async () => {
  const main = initMain();
  await main.run();
})();
