import t from 'tap';
import Substitute from '@fluffy-spoon/substitute';
import { _RectElement } from './RectElement';
import { rects } from './testData';
import { InitRectNode } from '../../../motionCanvasNodeTree/node/RectNode';

t.test('constructor correctly assigns props to same-name fields', t => {
  for (let i = 0; i < rects.length; i++) {

    interface InitRectNodeJacket {
      fn: InitRectNode
    }
    const initMotionCanvasRectNodeFnJacket = Substitute.for<InitRectNodeJacket>();

    const rectElement = new _RectElement({
      initMotionCanvasRectNodeFn: initMotionCanvasRectNodeFnJacket.fn,
    }, rects[i].props);

    // all the fields found on `rects[i].props`
    // are also found on `rectElement`
    for (let [k, v] of Object.entries(rects[i].props)) {
      const key = (rectElement as any)[k];
      t.equal(key, v, `at i=${i}: expected ${key} to equal ${v}`);
    }
  }

  t.end();
});

t.test('toMotionCanvasComponentNode correctly translates to MotionCanvasComponentNode', t => {
  // TODO
  t.pass();
  t.end();
});
