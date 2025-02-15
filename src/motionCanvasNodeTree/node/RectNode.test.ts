import t from 'tap';
import Substitute from '@fluffy-spoon/substitute';
import { RectNode, RectNodeProps, _RectNode } from './RectNode';
import { JSXComponentFactory } from './jsxComponent/JSXComponentFactory';
import { PropsFactory as JSXComponentPropsFactory } from './jsxComponent/props/PropsFactory';
import { JSXComponent } from './jsxComponent/JSXComponent';
import { Props as JSXComponentProps } from './jsxComponent/props/Props';
import { PropField as JSXComponentPropField } from './jsxComponent/props/Props';

t.test('toJSXComponent correctly builds JSXComponent with no children', t => {
  const jsxComponentFactory = Substitute.for<JSXComponentFactory>();
  const jsxComponentPropsFactory = Substitute.for<JSXComponentPropsFactory>();

  const resultJSXComponentProps
    = Substitute.for<JSXComponentProps>();

  const jsxComponentPropsFactoryInitArg: JSXComponentPropField[] = [
    {
      key: 'ref',
      value: 'brownFillAndStrokeRectSquareCircular',
      removeQuotesFromValue: true,
    } as JSXComponentPropField,
    {
      key: 'width',
      value: 44.620049,
    } as JSXComponentPropField,
    {
      key: 'height',
      value: 44.620049,
    } as JSXComponentPropField,
    {
      key: 'topLeft',
      value: [7.3198218, 218.05432],
    } as JSXComponentPropField,
    {
      key: 'fill',
      value: '#c87137',
    } as JSXComponentPropField,
    {
      key: 'stroke',
      value: '#1300ff',
    } as JSXComponentPropField,
    {
      key: 'lineWidth',
      value: 0.942981,
    } as JSXComponentPropField,
    {
      key: 'radius',
      value: 22.310024,
    } as JSXComponentPropField,
  ];

  jsxComponentPropsFactory
    .init(jsxComponentPropsFactoryInitArg)
    .returns({ ...resultJSXComponentProps });

  const resultJSXComponent = {
    name: "Rect",
    props: resultJSXComponentProps,
    children: [],
    toFileContentString: () => 'return',
  } as JSXComponent;

  jsxComponentFactory
    .init({
      name: "Rect",
      props: { ...resultJSXComponentProps },
      children: [],
    })
    .returns({ ...resultJSXComponent });

  const rectNode = new _RectNode(
    {
      jsxComponentFactory,
      jsxComponentPropsFactory,
    },
    {
      refName: 'brownFillAndStrokeRectSquareCircular',
      width: 44.620049,
      height: 44.620049,
      topLeft: [7.3198218, 218.05432],
      fill: '#c87137',
      stroke: '#1300ff',
      lineWidth: 0.942981,
      radius: 22.310024,
    } as RectNodeProps,
    [] as RectNode[]
  );



  const found = rectNode.toJSXComponent();
  const wanted = { ...resultJSXComponent };

  // start test internal calls
  jsxComponentPropsFactory
    .received()
    .init([...jsxComponentPropsFactoryInitArg]);

  jsxComponentFactory
    .received()
    .init({
      name: "Rect",
      props: { ...resultJSXComponentProps },
      children: [],
    });
  // end test internal calls

  t.same(found, wanted);
  t.end();
});

