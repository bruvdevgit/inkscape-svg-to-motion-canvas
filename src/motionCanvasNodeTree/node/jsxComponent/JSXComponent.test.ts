import t from 'tap';
import { _JSXComponent, JSXComponent, JSXComponentFields } from './JSXComponent';
import Substitute from '@fluffy-spoon/substitute';
import { Props } from './props/Props';

t.test('toFileContentString correctly produces a code representation when there\'s no children', t => {
  const fieldsProps = Substitute.for<Props>();
  const fields: JSXComponentFields = {
    name: 'Rect',
    props: fieldsProps,
    children: [] as JSXComponent[],
  };

  let propsLines = [
    "\tref={yellowFillOnlyRectSquareRoundedCorners}",
    "\twidth={scaleCoord(44.620049)}",
    "\theight={scaleCoord(44.620049)}",
    "\ttopLeft={[coordX(102.03346), coordY(183.74622)]}",
    "\tfill={'#ffcc00'}",
    "\tlineWidth={scaleCoord(1.73211)}",
    "\tradius={scaleCoord(10.748698)}",];

  fieldsProps.toStringLines('\t')
    .returns([...propsLines,]);

  const jsxComponent = new _JSXComponent(fields);

  const found = jsxComponent.toFileContentString();
  const wanted = `<Rect
\tref={yellowFillOnlyRectSquareRoundedCorners}
\twidth={scaleCoord(44.620049)}
\theight={scaleCoord(44.620049)}
\ttopLeft={[coordX(102.03346), coordY(183.74622)]}
\tfill={'#ffcc00'}
\tlineWidth={scaleCoord(1.73211)}
\tradius={scaleCoord(10.748698)}
>
</Rect>`;

  // start testing correct internal calls
  fieldsProps.received().toStringLines('\t')

  // end testing correct internal calls

  t.equal(found, wanted);
  t.end();
});


t.test('toFileContentString correctly produces a code representation when there are children', t => {
  const fieldsProps = Substitute.for<Props>();
  const childComponent1 = Substitute.for<JSXComponent>();
  const childComponent2 = Substitute.for<JSXComponent>();
  const childComponent3 = Substitute.for<JSXComponent>();

  const fields: JSXComponentFields = {
    name: 'Rect',
    props: fieldsProps,
    children: [childComponent1, childComponent2, childComponent3],
  };

  childComponent1.toFileContentString().returns('<Child1></Child1>');
  childComponent2.toFileContentString().returns('<Child2></Child2>');
  childComponent3.toFileContentString().returns('<Child3></Child3>');

  let propsLines = [
    "\tref={yellowFillOnlyRectSquareRoundedCorners}",
    "\twidth={scaleCoord(44.620049)}",
    "\theight={scaleCoord(44.620049)}",
    "\ttopLeft={[coordX(102.03346), coordY(183.74622)]}",
    "\tfill={'#ffcc00'}",
    "\tlineWidth={scaleCoord(1.73211)}",
    "\tradius={scaleCoord(10.748698)}",];

  fieldsProps.toStringLines('\t')
    .returns([...propsLines,]);

  const jsxComponent = new _JSXComponent(fields);

  const found = jsxComponent.toFileContentString();
  const wanted = `<Rect
\tref={yellowFillOnlyRectSquareRoundedCorners}
\twidth={scaleCoord(44.620049)}
\theight={scaleCoord(44.620049)}
\ttopLeft={[coordX(102.03346), coordY(183.74622)]}
\tfill={'#ffcc00'}
\tlineWidth={scaleCoord(1.73211)}
\tradius={scaleCoord(10.748698)}
>
<Child1></Child1>
<Child2></Child2>
<Child3></Child3>
</Rect>`;

  // start testing correct internal calls
  fieldsProps.received().toStringLines('\t')

  // end testing correct internal calls

  t.equal(found, wanted);
  t.end();
});
