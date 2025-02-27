import t from 'tap';
import { _InkscapeSVG } from './InkscapeSVG';
import { producedMotionCanvasRectNodes, rectInkscapeSVG } from './testData';
import { InitMotionCanvasNodeTreeFn, MotionCanvasNodeTree, MotionCanvasNodeTreeFields } from '../motionCanvasNodeTree/MotionCanvasNodeTree';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _RectElement } from './element/rectElement/RectElement';
import { InitMotionCanvasNodesListFn, MotionCanvasNodesList } from '../motionCanvasNodeTree/MotionCanvasNodesList';

t.test('constructor correctly assigns props to same-name fields', t => {

  interface InitMotionCanvasNodeTreeFnJacket {
    fn: InitMotionCanvasNodeTreeFn
  }
  const initMotionCanvasNodeTreeJacket
    = Substitute.for<InitMotionCanvasNodeTreeFnJacket>();

  interface InitMotionCanvasNodesListFnJacket {
    fn: InitMotionCanvasNodesListFn
  }
  const initMotionCanvasNodesListFnJacket
    = Substitute.for<InitMotionCanvasNodesListFnJacket>();

  const inkscapeSVG = new _InkscapeSVG({
    initMotionCanvasNodeTreeFn: initMotionCanvasNodeTreeJacket.fn,
    initMotionCanvasNodesList: initMotionCanvasNodesListFnJacket.fn,
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

  interface InitMotionCanvasNodesListFnJacket {
    fn: InitMotionCanvasNodesListFn
  }
  const initMotionCanvasNodesListFnJacket
    = Substitute.for<InitMotionCanvasNodesListFnJacket>();

  const nodesList = Substitute.for<MotionCanvasNodesList>();

  initMotionCanvasNodesListFnJacket
    .fn(producedMotionCanvasRectNodes)
    .returns(nodesList);


  const motionCanvasNodeTree = Substitute.for<MotionCanvasNodeTree>();

  const nodeTreeFields: MotionCanvasNodeTreeFields = {
    nodes: nodesList,
    canvasHeight: 1080,
    canvasWidth: 1920,
    heightAntecedent: 285.75,
    widthAntecedent: 508,
  };

  initMotionCanvasNodeTreeJacket
    .fn(nodeTreeFields)
    .returns(motionCanvasNodeTree);

  const inkscapeSVG = new _InkscapeSVG({
    initMotionCanvasNodeTreeFn: initMotionCanvasNodeTreeJacket.fn,
    initMotionCanvasNodesList: initMotionCanvasNodesListFnJacket.fn,
  }, rectInkscapeSVG);

  const found = inkscapeSVG.toMotionCanvasNodeTree();
  const wanted = motionCanvasNodeTree;

  // start testing internal calls

  initMotionCanvasNodesListFnJacket
    .fn(producedMotionCanvasRectNodes)

  initMotionCanvasNodeTreeJacket
    .received()
    .fn(nodeTreeFields);

  // end testing internal calls

  t.same(found, wanted);
  t.end();
});
