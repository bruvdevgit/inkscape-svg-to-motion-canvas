import t from 'tap';
import { _JSXComponent, JSXComponent, JSXComponentFields } from './JSXComponent';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
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


t.test('toFileContentString correctly produces a code representation', t => {
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

  childComponent1.toFileContentString('\t', 1).returns('<Child1></Child1>');
  childComponent2.toFileContentString('\t', 1).returns('<Child2></Child2>');
  childComponent3.toFileContentString('\t', 1).returns('<Child3></Child3>');


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


  childComponent1
    .received()
    .toFileContentString('\t', 1);

  childComponent2
    .received()
    .toFileContentString('\t', 1);

  childComponent3
    .received()
    .toFileContentString('\t', 1);
  // end testing correct internal calls

  t.equal(found, wanted);
  t.end();
});


t.test('toFileContentString correctly produces a code representation with custom indentation', t => {
  const fieldsProp1 = Substitute.for<Prop>();
  const indentStr = '+indent+';
  fieldsProp1.toStringLine('+indent++indent+')
    .returns("+indent++indent+ref={yellowFillOnlyRectSquareRoundedCorners}",);

  const fieldsProp2 = Substitute.for<Prop>();
  fieldsProp2.toStringLine('+indent++indent+')
    .returns("+indent++indent+width={scaleCoord(44.620049)}");

  const fieldsProp3 = Substitute.for<Prop>();
  fieldsProp3.toStringLine('+indent++indent+')
    .returns("+indent++indent+height={scaleCoord(44.620049)}");



  const childComponent1 = Substitute.for<JSXComponent>();
  const childComponent2 = Substitute.for<JSXComponent>();
  const childComponent3 = Substitute.for<JSXComponent>();

  const fields: JSXComponentFields = {
    name: 'Rect',
    props: [fieldsProp1, fieldsProp2, fieldsProp3],
    children: [childComponent1, childComponent2, childComponent3],
  };

  childComponent1.toFileContentString('+indent+', 2).returns('<Child1></Child1>');
  childComponent2.toFileContentString('+indent+', 2).returns('<Child2></Child2>');
  childComponent3.toFileContentString('+indent+', 2).returns('<Child3></Child3>');


  const jsxComponent = new _JSXComponent(fields);

  const found = jsxComponent.toFileContentString('+indent+', 1);
  const wanted = `+indent+<Rect
+indent++indent+ref={yellowFillOnlyRectSquareRoundedCorners}
+indent++indent+width={scaleCoord(44.620049)}
+indent++indent+height={scaleCoord(44.620049)}
+indent+>
<Child1></Child1>
<Child2></Child2>
<Child3></Child3>
+indent+</Rect>`;

  // start testing correct internal calls
  fieldsProp1
    .received()
    .toStringLine('+indent++indent+');

  fieldsProp2
    .received()
    .toStringLine('+indent++indent+');

  fieldsProp3
    .received()
    .toStringLine('+indent++indent+');


  childComponent1
    .received()
    .toFileContentString('+indent+', 2);

  childComponent2
    .received()
    .toFileContentString('+indent+', 2);

  childComponent3
    .received()
    .toFileContentString('+indent+', 2);
  // end testing correct internal calls

  t.equal(found, wanted);
  t.end();
});
