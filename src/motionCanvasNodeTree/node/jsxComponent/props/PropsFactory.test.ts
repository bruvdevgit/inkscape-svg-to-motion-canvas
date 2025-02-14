import t from 'tap';
import { _PropsFactory } from './PropsFactory';
import { _Props, InitPropsFn, PropField } from './Props';
import Substitute from '@fluffy-spoon/substitute';

t.test('constructor correctly constructs a Props instance', t => {
  interface InitPropsFnJacket {
    fn: InitPropsFn
  }
  const initJSXComponentProps = Substitute.for<InitPropsFnJacket>();

  const factory = new _PropsFactory({
    initJSXComponentProps: initJSXComponentProps.fn,
  });

  const fields: PropField[] = [
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
  ];

  initJSXComponentProps.fn([...fields]).returns(new _Props([...fields]));

  const found = factory.init(fields);
  const wanted = new _Props([...fields]);

  t.same(found, wanted);
  t.end();
});
