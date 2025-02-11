import t from 'tap';
import { _RectElement } from './RectElement';
import { rects } from './testData';

//function removeUndefinedFields(obj: Object) {
//  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != undefined));
//}

t.test('constructor correctly assigns props to same-name fields', t => {
  for (let i = 0; i < rects.length; i++) {

    const rectElement = new _RectElement(rects[i].props);

    // all the fields found on `rects[i].props`
    // are also found on `rectElement`
    for (let [k, v] of Object.entries(rects[i].props)) {
      const key = (rectElement as any)[k];
      t.equal(key, v, `at i=${i}: expected ${key} to equal ${v}`);
    }
  }

  t.end();
});

