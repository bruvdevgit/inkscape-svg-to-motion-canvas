import t from 'tap';
import { _Props } from './Props';

t.test('toStringLines correctly creates strings for lines of props', t => {

  const props = new _Props([
    {
      key: 'ref',
      value: 'greenFillAndStrokeRectXLongSharpCorners',
      removeQuotesFromValue: true,
    },
    {
      key: 'width',
      value: 'scaleCoord(82.803673)',
      removeQuotesFromValue: true,
    },
    {
      key: 'height',
      value: 'scaleCoord(25.728548)',
      removeQuotesFromValue: true,
    },
    {
      key: 'topLeft',
      value: ['coordX(9.0465326)', 'coordY(10.700179)'],
      removeQuotesFromValue: true,
    },
    {
      key: 'fill',
      value: '#2ca02c',
    },
    {
      key: 'stroke',
      value: '#1300ff',
    },
    {
      key: 'lineWidth',
      value: 'scaleCoord(1.23096)',
      removeQuotesFromValue: true,
    },
  ]);
  let foundArray = props.toStringLines('\t');
  let expectedArray = [
    '\tref= {greenFillAndStrokeRectXLongSharpCorners}',
    '\twidth= {scaleCoord(82.803673)}',
    '\theight= {scaleCoord(25.728548)}',
    '\ttopLeft= {[coordX(9.0465326), coordY(10.700179), ]}',
    '\tfill= {"#2ca02c"}',
    '\tstroke= {"#1300ff"}',
    '\tlineWidth= {scaleCoord(1.23096)}',
  ];

  for (let i = 0; i < foundArray.length; i++) {
    t.equal(foundArray[i], expectedArray[i], `mismatch at i=${i}`);
  }

  t.end();
});

