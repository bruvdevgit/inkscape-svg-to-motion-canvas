import t from 'tap';
import { _InkscapeSVG } from './InkscapeSVG';
import { rectInkscapeSVG } from './testData';

t.test('constructor correctly assigns props to same-name fields', t => {

  const rectElement = new _InkscapeSVG(rectInkscapeSVG);

  // all the fields found on `rects[i].props`
  // are also found on `rectElement`
  for (let [k, v] of Object.entries(rectInkscapeSVG)) {
    const key = (rectElement as any)[k];
    t.equal(key, v, `expected ${key} to equal ${v}`);
  }
  t.end();
});

