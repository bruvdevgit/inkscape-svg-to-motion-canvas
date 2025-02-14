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


//t.test('toString correctly produces a code representation when there are children', t => {
//  // TODO
//  t.end();
//});
