import t from 'tap';
import { Arg, Substitute, SubstituteOf } from '@fluffy-spoon/substitute';
import { RectNode, RectNodeFields, _RectNode } from './RectNode.ts';
import { JSXComponentFactory } from './jsxComponent/JSXComponentFactory.ts';
import { PropFactory as JSXComponentPropFactory } from './jsxComponent/prop/PropFactory.ts';
import { JSXComponent } from './jsxComponent/JSXComponent.ts';
import { Prop as JSXComponentProp } from './jsxComponent/prop/Prop.ts';
import { PropField as JSXComponentPropField } from './jsxComponent/prop/Prop.ts';
import { CamelCaseWrapper } from '../../wrappers/CamelCaseWrapper.ts';

t.test('toJSXComponent correctly builds JSXComponent with no children', t => {
  const jsxComponentFactory = Substitute.for<JSXComponentFactory>();
  const jsxComponentPropFactory = Substitute.for<JSXComponentPropFactory>();
  const camelCaseWrapper = Substitute.for<CamelCaseWrapper>();

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
          value: 'scaleCoord(44.620049)',
          removeQuotesFromValue: true,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'height',
          value: 'scaleCoord(44.620049)',
          removeQuotesFromValue: true,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'topLeft',
          value: ['coordX(7.3198218)', 'coordY(218.05432)'],
          removeQuotesFromValue: true,
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
          key: 'lineWidth',
          value: 'scaleCoord(0.942981)',
          removeQuotesFromValue: true,
        } as JSXComponentPropField,
        prop: Substitute.for<JSXComponentProp>(),
      },
      {
        field: {
          key: 'radius',
          value: 'scaleCoord(22.310024)',
          removeQuotesFromValue: true,
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
    getReferenceVariableName: () => 'return2',
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
      camelCaseWrapper,
      jsxComponentFactory,
      jsxComponentPropFactory,
    },
    {
      refName: 'brown-fill-and-stroke-rect-square-circular',
      width: 44.620049,
      height: 44.620049,
      topLeft: [7.3198218, 218.05432],
      fill: '#c87137',
      stroke: 'none',
      lineWidth: 0.942981,
      radius: 22.310024,
      children: [] as RectNode[]
    } as RectNodeFields,
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

t.test('getReferenceVariableName correctly gives the variable name', t => {
  const jsxComponentFactory = Substitute.for<JSXComponentFactory>();
  const jsxComponentPropFactory = Substitute.for<JSXComponentPropFactory>();
  const camelCaseWrapper = Substitute.for<CamelCaseWrapper>();

  camelCaseWrapper
    .parse('brown-fill-and-stroke-rect-square-circular')
    .returns('brownFillAndStrokeRectSquareCircular');

  const rectNode = new _RectNode(
    {
      camelCaseWrapper,
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
      children: [] as RectNode[],
    } as RectNodeFields,
  );

  const found = rectNode.getReferenceVariableName();
  const wanted = 'brownFillAndStrokeRectSquareCircular'


  // start call tests

  camelCaseWrapper
    .received()
    .parse('brown-fill-and-stroke-rect-square-circular');

  // stop call tests

  t.equal(found, wanted);
  t.end();
});


t.test('getType returns expected string', t => {
  const jsxComponentFactory = Substitute.for<JSXComponentFactory>();
  const jsxComponentPropFactory = Substitute.for<JSXComponentPropFactory>();
  const camelCaseWrapper = Substitute.for<CamelCaseWrapper>();

  const rectNode = new _RectNode(
    {
      camelCaseWrapper,
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
      children: [] as RectNode[],
    } as RectNodeFields,
  );
  const found = rectNode.getType();
  const wanted = 'Rect';

  t.equal(found, wanted);
  t.end();
});
