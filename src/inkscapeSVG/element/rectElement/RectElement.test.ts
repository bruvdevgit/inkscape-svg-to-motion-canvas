import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _RectElement, RectElementFields } from './RectElement.ts';
import { rects } from './testData.ts';
import { InitRectNode, RectNode, RectNodeFields } from '../../../motionCanvasNodeTree/node/RectNode.ts';
import { Node as MotionCanvasNode } from '../../../motionCanvasNodeTree/node/Node.ts';
import { Element } from '../Element.ts';

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
  interface InitRectNodeJacket {
    fn: InitRectNode
  }
  const initMotionCanvasRectNodeFnJacket = Substitute.for<InitRectNodeJacket>();

  const childElement1 = Substitute.for<Element>();
  const childElement1MotionCanvasNode = Substitute.for<MotionCanvasNode>();
  childElement1.toMotionCanvasNode().returns(childElement1MotionCanvasNode);

  const childElement2 = Substitute.for<Element>();
  const childElement2MotionCanvasNode = Substitute.for<MotionCanvasNode>();
  childElement2.toMotionCanvasNode().returns(childElement2MotionCanvasNode);

  const childElement3 = Substitute.for<Element>();
  const childElement3MotionCanvasNode = Substitute.for<MotionCanvasNode>();
  childElement3.toMotionCanvasNode().returns(childElement3MotionCanvasNode);

  const rectNodeFields = {
    refName: "green-fill-and-stroke-rect-x-long-sharp-corners",
    width: 82.803673,
    height: 25.728548,
    topLeft: [9.0465326, 10.700179],
    fill: "#2ca02c",
    stroke: "#1300ff",
    lineWidth: 1.23096,
    children: [childElement1MotionCanvasNode,
      childElement2MotionCanvasNode,
      childElement3MotionCanvasNode] as MotionCanvasNode[],
  } as RectNodeFields;

  initMotionCanvasRectNodeFnJacket
    .fn({ ...rectNodeFields })
    .returns({ ...rectNodeFields } as RectNode);


  const rectElement = new _RectElement({
    initMotionCanvasRectNodeFn: initMotionCanvasRectNodeFnJacket.fn,
  }, {
    "id": "rect1",
    "width": 82.803673,
    "height": 25.728548,
    "x": 9.0465326,
    "y": 10.700179,
    label: "green-fill-and-stroke-rect-x-long-sharp-corners",
    "fill": "#2ca02c",
    "fillOpacity": 1,
    "stroke": "#1300ff",
    "strokeWidth": 1.23096,
    "strokeLinecap": "round",
    "strokeLinejoin": "round",
    "strokeMiterlimit": 0,
    "strokeDasharray": "none",
    "strokeOpacity": 1,
    "paintOrder": "fill markers stroke",
    "children": [childElement1, childElement2, childElement3],
  } as RectElementFields);

  const found = rectElement.toMotionCanvasNode();
  const wanted = { ...rectNodeFields } as RectNode;

  // start internal test

  initMotionCanvasRectNodeFnJacket
    .received()
    .fn({ ...rectNodeFields });

  // end internal test

  t.same(found, wanted);
  t.pass();
  t.end();
});
