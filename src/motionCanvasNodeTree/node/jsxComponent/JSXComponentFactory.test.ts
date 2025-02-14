import t from 'tap';
import { InitJSXComponentFn, JSXComponent, JSXComponentFields } from './JSXComponent';
import Substitute from '@fluffy-spoon/substitute';
import { _JSXComponentFactory } from './JSXComponentFactory';
import { Props } from './props/Props';

t.test('init correctly initializes a JSXComponent', t => {
  interface InitJSXComponentFnJacket {
    fn: InitJSXComponentFn,
  }
  const initJSXComponentFnJacket = Substitute.for<InitJSXComponentFnJacket>()

  const fieldsProps = Substitute.for<Props>();
  const fields: JSXComponentFields = {
    name: 'Rect',
    props: fieldsProps,
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
