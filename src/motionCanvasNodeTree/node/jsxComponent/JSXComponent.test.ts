import t from 'tap';
import { _JSXComponent, JSXComponent, JSXComponentFields } from './JSXComponent';
import Substitute from '@fluffy-spoon/substitute';
import { Prop } from './prop/Prop';

t.test('toFileContentString correctly produces a code representation when there\'s no children', t => {
  const fieldsProp1 = Substitute.for<Prop>();
  fieldsProp1.toStringLine('\t')
    .returns("\tref={yellowFillOnlyRectSquareRoundedCorners}",);

  const fieldsProp2 = Substitute.for<Prop>();
  fieldsProp2.toStringLine('\t')
    .returns("\twidth={scaleCoord(44.620049)}");

  const fieldsProp3 = Substitute.for<Prop>();
  fieldsProp3.toStringLine('\t')
    .returns("\theight={scaleCoord(44.620049)}");

  const fields: JSXComponentFields = {
    name: 'Rect',
    props: [fieldsProp1, fieldsProp2, fieldsProp3],
    children: [] as JSXComponent[],
  };

  const jsxComponent = new _JSXComponent(fields);

  const found = jsxComponent.toFileContentString();
  const wanted = `<Rect
\tref={yellowFillOnlyRectSquareRoundedCorners}
\twidth={scaleCoord(44.620049)}
\theight={scaleCoord(44.620049)}
>
</Rect>`;

  // start testing correct internal calls
  fieldsProp1
    .received()
    .toStringLine('\t');

  fieldsProp2
    .received()
    .toStringLine('\t');

  fieldsProp3
    .received()
    .toStringLine('\t');
  // end testing correct internal calls

  t.equal(found, wanted);
  t.end();
});


t.test('toFileContentString correctly produces a code representation when there are children', t => {
  const fieldsProp1 = Substitute.for<Prop>();
  fieldsProp1.toStringLine('\t')
    .returns("\tref={yellowFillOnlyRectSquareRoundedCorners}",);

  const fieldsProp2 = Substitute.for<Prop>();
  fieldsProp2.toStringLine('\t')
    .returns("\twidth={scaleCoord(44.620049)}");

  const fieldsProp3 = Substitute.for<Prop>();
  fieldsProp3.toStringLine('\t')
    .returns("\theight={scaleCoord(44.620049)}");



  const childComponent1 = Substitute.for<JSXComponent>();
  const childComponent2 = Substitute.for<JSXComponent>();
  const childComponent3 = Substitute.for<JSXComponent>();

  const fields: JSXComponentFields = {
    name: 'Rect',
    props: [fieldsProp1, fieldsProp2, fieldsProp3],
    children: [childComponent1, childComponent2, childComponent3],
  };

  childComponent1.toFileContentString().returns('<Child1></Child1>');
  childComponent2.toFileContentString().returns('<Child2></Child2>');
  childComponent3.toFileContentString().returns('<Child3></Child3>');


  const jsxComponent = new _JSXComponent(fields);

  const found = jsxComponent.toFileContentString();
  const wanted = `<Rect
\tref={yellowFillOnlyRectSquareRoundedCorners}
\twidth={scaleCoord(44.620049)}
\theight={scaleCoord(44.620049)}
>
<Child1></Child1>
<Child2></Child2>
<Child3></Child3>
</Rect>`;

  // start testing correct internal calls
  fieldsProp1
    .received()
    .toStringLine('\t');

  fieldsProp2
    .received()
    .toStringLine('\t');

  fieldsProp3
    .received()
    .toStringLine('\t');
  // end testing correct internal calls

  t.equal(found, wanted);
  t.end();
});
