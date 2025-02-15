import t from 'tap';
import Substitute from '@fluffy-spoon/substitute';
import { _MotionCanvasNodeTree } from './MotionCanvasNodeTree';
import { _RectNode } from './node/RectNode';
import { Node as MotionCanvasNode } from './node/Node';
import { JSXComponent } from './node/jsxComponent/JSXComponent';

t.test('toFileContentString correctly stringifies', t => {

  const node1 = Substitute.for<MotionCanvasNode>();
  const jsxComponent1 = Substitute.for<JSXComponent>();
  jsxComponent1
    .toFileContentString()
    .returns('<JSXComponenet1></JSXComponent1>');
  node1
    .toJSXComponent()
    .returns(jsxComponent1);

  const node2 = Substitute.for<MotionCanvasNode>();
  const jsxComponent2 = Substitute.for<JSXComponent>();
  jsxComponent2
    .toFileContentString()
    .returns('<JSXComponenet2></JSXComponent2>');
  node2
    .toJSXComponent()
    .returns(jsxComponent2);

  const node3 = Substitute.for<MotionCanvasNode>();
  const jsxComponent3 = Substitute.for<JSXComponent>();
  jsxComponent3
    .toFileContentString()
    .returns('<JSXComponenet3></JSXComponent3>');
  node3
    .toJSXComponent()
    .returns(jsxComponent3);

  const motionCanvasNodeTree = new _MotionCanvasNodeTree(
    [node1, node2, node3]);

  const found = motionCanvasNodeTree.toFileContentString();
  const wanted = `<JSXComponenet1></JSXComponent1>
<JSXComponenet2></JSXComponent2>
<JSXComponenet3></JSXComponent3>`;

  t.equal(found, wanted);
  t.end();
});
