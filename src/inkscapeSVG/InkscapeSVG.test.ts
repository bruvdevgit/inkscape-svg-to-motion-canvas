import t from 'tap';
import { _InkscapeSVG } from './InkscapeSVG.ts';
import { producedMotionCanvasRectNodes, rectInkscapeSVG } from './testData.ts';
import { InitMotionCanvasNodeTreeFn, MotionCanvasNodeTree, MotionCanvasNodeTreeFields } from '../motionCanvasNodeTree/MotionCanvasNodeTree.ts';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _RectElement } from './element/rectElement/RectElement.ts';

t.test('constructor correctly assigns props to same-name fields', t => {

  interface InitMotionCanvasNodeTreeFnJacket {
    fn: InitMotionCanvasNodeTreeFn
  }
  const initMotionCanvasNodeTreeJacket
    = Substitute.for<InitMotionCanvasNodeTreeFnJacket>();

  const inkscapeSVG = new _InkscapeSVG({
    initMotionCanvasNodeTreeFn: initMotionCanvasNodeTreeJacket.fn,
  }, rectInkscapeSVG);

  // all the fields found on `rects[i].props`
  // are also found on `rectElement`
  for (let [k, v] of Object.entries(rectInkscapeSVG)) {
    const key = (inkscapeSVG as any)[k];
    t.equal(key, v, `expected ${key} to equal ${v}`);
  }
  t.end();
});

t.test('toMotionCanvasNodeTree correctly creates using initMotionCanvasNodeTreeFn', t => {
  interface InitMotionCanvasNodeTreeFnJacket {
    fn: InitMotionCanvasNodeTreeFn
  }
  const initMotionCanvasNodeTreeJacket
    = Substitute.for<InitMotionCanvasNodeTreeFnJacket>();

  const motionCanvasNodeTree = Substitute.for<MotionCanvasNodeTree>();

  initMotionCanvasNodeTreeJacket
    .fn({
      nodes: producedMotionCanvasRectNodes,
      canvasHeight: 1080,
      canvasWidth: 1920,
      heightAntecedent: 285.75,
      widthAntecedent: 508,
    } as MotionCanvasNodeTreeFields)
    .returns(motionCanvasNodeTree);

  const inkscapeSVG = new _InkscapeSVG({
    initMotionCanvasNodeTreeFn: initMotionCanvasNodeTreeJacket.fn,
  }, rectInkscapeSVG);

  const found = inkscapeSVG.toMotionCanvasNodeTree();
  const wanted = motionCanvasNodeTree;

  // start testing internal calls

  initMotionCanvasNodeTreeJacket
    .received()
    .fn({
      nodes: producedMotionCanvasRectNodes,
      canvasHeight: 1080,
      canvasWidth: 1920,
      heightAntecedent: 285.75,
      widthAntecedent: 508,
    } as MotionCanvasNodeTreeFields);

  // end testing internal calls

  t.same(found, wanted);
  t.end();
});
