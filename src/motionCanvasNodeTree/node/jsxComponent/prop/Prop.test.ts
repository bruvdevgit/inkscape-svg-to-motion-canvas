import t from 'tap';
import { _Prop as _Prop } from './Prop';
import { data } from './testData';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { CamelCaseWrapper } from '../../../../wrappers/CamelCaseWrapper';

t.test('toStringLines correctly creates strings for lines of props', t => {

  for (let i = 0; i < data.length; i++) {
    const { fields, stringified } = data[i];

    const camelCaseWrapper = Substitute.for<CamelCaseWrapper>();

    const props = new _Prop({
      camelCaseWrapper,
    }, fields);
    const found = props.toStringLine('\t');
    const expected = stringified;

    t.equal(found, expected, `mismatch at i=${i}`);
  }

  t.end();
});

t.test('toStringLines correctly creates strings for lines of camel-case-ified props', t => {
  const camelCaseWrapper = Substitute.for<CamelCaseWrapper>();
  camelCaseWrapper
    .parse('green-fill-and-stroke-rect-x-long-sharp-corners')
    .returns('greenFillAndStrokeRectXLongSharpCorners');

  const props = new _Prop({
    camelCaseWrapper,
  }, {
    key: 'ref',
    value: 'green-fill-and-stroke-rect-x-long-sharp-corners',
    removeQuotesFromValue: true,
    turnValueToCamelCase: true,
  });
  const found = props.toStringLine('\t');
  const expected = '\tref= {greenFillAndStrokeRectXLongSharpCorners}';

  // start test internal calls
  camelCaseWrapper
    .received()
    .parse('green-fill-and-stroke-rect-x-long-sharp-corners');

  // end test internal calls
  t.equal(found, expected);
  t.end();
});
