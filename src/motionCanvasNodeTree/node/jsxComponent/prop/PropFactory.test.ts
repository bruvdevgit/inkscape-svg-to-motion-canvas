import t from 'tap';
import { _PropFactory } from './PropFactory.ts';
import { _Prop, InitPropFn, PropField } from './Prop.ts';
import { Arg, Substitute } from '@fluffy-spoon/substitute';

t.test('constructor correctly constructs a Prop instance', t => {
  interface InitPropFnJacket {
    fn: InitPropFn
  }
  const initJSXComponentProp = Substitute.for<InitPropFnJacket>();

  const factory = new _PropFactory({
    initJSXComponentProp: initJSXComponentProp.fn,
  });

  const field: PropField = {
    key: 'ref',
    value: 'greenFillAndStrokeRectXLongSharpCorners',
    removeQuotesFromValue: true,
  };

  initJSXComponentProp.fn(field).returns(new _Prop({ ...field }));

  const found = factory.init({ ...field });
  const wanted = new _Prop({ ...field });

  t.same(found, wanted);
  t.end();
});
