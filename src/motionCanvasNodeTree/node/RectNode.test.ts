import t from 'tap';
import Substitute, { SubstituteOf } from '@fluffy-spoon/substitute';
import { RectNode, RectNodeFields, _RectNode } from './RectNode';
import { JSXComponentFactory } from './jsxComponent/JSXComponentFactory';
import { PropFactory as JSXComponentPropFactory } from './jsxComponent/prop/PropFactory';
import { JSXComponent } from './jsxComponent/JSXComponent';
import { Prop as JSXComponentProp } from './jsxComponent/prop/Prop';
import { PropField as JSXComponentPropField } from './jsxComponent/prop/Prop';

t.test('toJSXComponent correctly builds JSXComponent with no children', t => {
  const jsxComponentFactory = Substitute.for<JSXComponentFactory>();
  const jsxComponentPropFactory = Substitute.for<JSXComponentPropFactory>();

  const items: {
    field: JSXComponentPropField,
    prop: SubstituteOf<JSXComponentProp>
  }[] = [
      {
        field: {
          key: 'ref',
          value: 'brown-fill-and-stroke-rect-square-circular',
          removeQuotesFromValue: true,
          turnValueToCamelCase: true,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'width',
          value: 44.620049,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'height',
          value: 44.620049,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'topLeft',
          value: [7.3198218, 218.05432],
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'fill',
          value: '#c87137',
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'stroke',
          value: '#1300ff',
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'lineWidth',
          value: 0.942981,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'radius',
          value: 22.310024,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
    ];

  for (let i = 0; i < items.length; i++) {
    jsxComponentPropFactory
      .init({ ...items[i].field })
      .returns({ ...items[i].prop });
  };

  const resultJSXComponent = {
    commentLabel: 'brown-fill-and-stroke-rect-square-circular',
    name: "Rect",
    props: items.map(item => item.prop),
    children: [],
    toFileContentString: () => 'return',
  } as JSXComponent;

  jsxComponentFactory
    .init({
      commentLabel: 'brown-fill-and-stroke-rect-square-circular',
      name: "Rect",
      props: [...items.map(item => ({ ...item.prop }))],
      children: [],
    })
    .returns({ ...resultJSXComponent });

  const rectNode = new _RectNode(
    {
      jsxComponentFactory,
      jsxComponentPropFactory,
    },
    {
      refName: 'brown-fill-and-stroke-rect-square-circular',
      width: 44.620049,
      height: 44.620049,
      topLeft: [7.3198218, 218.05432],
      fill: '#c87137',
      stroke: '#1300ff',
      lineWidth: 0.942981,
      radius: 22.310024,
    } as RectNodeFields,
    [] as RectNode[]
  );

  const found = rectNode.toJSXComponent();
  const wanted = { ...resultJSXComponent };

  // start test internal calls
  for (let i = 0; i < items.length; i++) {
    jsxComponentPropFactory
      .received()
      .init({ ...items[i].field });
  };

  jsxComponentFactory
    .received()
    .init({
      commentLabel: 'brown-fill-and-stroke-rect-square-circular',
      name: "Rect",
      props: [...items.map(item => ({ ...item.prop }))],
      children: [],
    });

  // end test internal calls

  t.same(found, wanted);
  t.end();
});

