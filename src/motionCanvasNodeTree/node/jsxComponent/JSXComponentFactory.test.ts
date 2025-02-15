import t from 'tap';
import { InitJSXComponentFn, JSXComponent, JSXComponentFields } from './JSXComponent';
import Substitute from '@fluffy-spoon/substitute';
import { _JSXComponentFactory } from './JSXComponentFactory';
import { Prop } from './prop/Prop';

t.test('init correctly initializes a JSXComponent', t => {
  interface InitJSXComponentFnJacket {
    fn: InitJSXComponentFn,
  }
  const initJSXComponentFnJacket = Substitute.for<InitJSXComponentFnJacket>()

  const prop1 = Substitute.for<Prop>();
  const prop2 = Substitute.for<Prop>();
  const prop3 = Substitute.for<Prop>();

  const fields: JSXComponentFields = {
    name: 'Rect',
    props: [prop1, prop2, prop3],
    children: [] as JSXComponent[],
  };

  initJSXComponentFnJacket.fn({ ...fields })
    .returns({
      ...fields,
      toFileContentString: () => '',
    } as JSXComponent);

  const jsxComponentFactory = new _JSXComponentFactory({
    initJSXComponent: initJSXComponentFnJacket.fn
  });

  const found = jsxComponentFactory.init(fields);
  const wanted = {
    ...fields,
    toFileContentString: () => '',
  } as JSXComponent;


  // start testing internal function calls
  // end testing internal function calls

  t.same(found, wanted);
  t.end()
});
