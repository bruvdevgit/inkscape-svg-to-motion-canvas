import t from 'tap';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { _GroupElement, GroupElementFields } from './GroupElement.ts';
import { InitRectNode, RectNode, RectNodeFields } from '../../../motionCanvasNodeTree/node/rectNode/RectNode.ts';
import { Node as MotionCanvasNode } from '../../../motionCanvasNodeTree/node/Node.ts';
import { Element } from '../Element.ts';
import { INode } from 'svgson';
import { GroupElementAttributes } from './GroupElementAttributesSchema.ts';

t.test('constructor correctly assigns props to same-name fields', t => {
  const props: GroupElementFields[] = [
    {
      "id": "rect1",
      children: [],
    },
    {
      "id": "rect2",
      children: [],
    },
    {

      "id": "rect3",
      children: [],
    },
    {

      "id": "rect4",
      children: [],
    },
  ];

  for (let i = 0; i < props.length; i++) {

    interface InitRectNodeJacket {
      fn: InitRectNode
    }
    const initMotionCanvasRectNodeFnJacket = Substitute.for<InitRectNodeJacket>();

    const rectElement = new _GroupElement({
      initMotionCanvasRectNodeFn: initMotionCanvasRectNodeFnJacket.fn,
    }, props[i]);

    // all the fields found on `props[i]`
    // are also found on `rectElement`
    for (let [k, v] of Object.entries(props[i])) {
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
  childElement1.toMotionCanvasNodes().returns([childElement1MotionCanvasNode]);

  const childElement2 = Substitute.for<Element>();
  const childElement2MotionCanvasNode = Substitute.for<MotionCanvasNode>();
  childElement2.toMotionCanvasNodes().returns([childElement2MotionCanvasNode]);

  const childElement3 = Substitute.for<Element>();
  const childElement3MotionCanvasNode1 = Substitute.for<MotionCanvasNode>();
  const childElement3MotionCanvasNode2 = Substitute.for<MotionCanvasNode>();
  childElement3.toMotionCanvasNodes().returns([childElement3MotionCanvasNode1, childElement3MotionCanvasNode2]);

  const rectNodeFields = {
    refName: "rect1",
    children: [childElement1MotionCanvasNode,
      childElement2MotionCanvasNode,
      childElement3MotionCanvasNode1,
      childElement3MotionCanvasNode2,
    ] as MotionCanvasNode[],
  } as RectNodeFields;

  initMotionCanvasRectNodeFnJacket
    .fn({ ...rectNodeFields })
    .returns({ ...rectNodeFields } as RectNode);


  const groupElement = new _GroupElement({
    initMotionCanvasRectNodeFn: initMotionCanvasRectNodeFnJacket.fn,
  }, {
    "id": "rect1",
    "children": [childElement1, childElement2, childElement3],
  } as GroupElementFields);

  const found = groupElement.toMotionCanvasNodes();
  const wanted = [{ ...rectNodeFields } as RectNode];

  // start internal test

  initMotionCanvasRectNodeFnJacket
    .received()
    .fn({ ...rectNodeFields });

  // end internal test

  t.same(found, wanted);
  t.pass();
  t.end();
});
