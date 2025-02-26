import t from 'tap';
import { Arg, Substitute, SubstituteOf } from '@fluffy-spoon/substitute';
import { RectNode, RectNodeFields, _RectNode } from './RectNode.ts';
import { JSXComponentFactory } from '../jsxComponent/JSXComponentFactory.ts';
import { PropFactory as JSXComponentPropFactory } from '../jsxComponent/prop/PropFactory.ts';
import { JSXComponent } from '../jsxComponent/JSXComponent.ts';
import { Prop as JSXComponentProp } from '../jsxComponent/prop/Prop.ts';
import { PropField as JSXComponentPropField } from '../jsxComponent/prop/Prop.ts';
import { CamelCaseWrapper } from '../../../wrappers/CamelCaseWrapper.ts';
import { NodeReference } from '../../MotionCanvasCodeRenderer.ts';
import { Node } from '../Node.ts';

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

t.test('getReference correctly gives the reference with no children', t => {
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

  const found = rectNode.getReferences();
  const wanted = [{
    variableName: 'brownFillAndStrokeRectSquareCircular',
    type: 'Rect',
  } as NodeReference];


  // start call tests

  camelCaseWrapper
    .received()
    .parse('brown-fill-and-stroke-rect-square-circular');

  // stop call tests

  t.same(found, wanted);
  t.end();
});


t.test('getReference correctly gives the reference recursively with children', t => {
  // start preparing children

  const child1 = Substitute.for<Node>();
  child1.getReferences().returns([
    {
      variableName: 'child1Variable',
      type: 'Child1Type',
    } as NodeReference,
  ]);

  const child2 = Substitute.for<Node>();
  child2.getReferences().returns([
    {
      variableName: 'child2Variable',
      type: 'Child2Type',
    } as NodeReference,
    {
      variableName: 'child2Variable2',
      type: 'Child2Type2',
    } as NodeReference,
  ]);

  const child3 = Substitute.for<Node>();
  child3.getReferences().returns([
    {
      variableName: 'child3Variable',
      type: 'Child3Type',
    } as NodeReference,
    {
      variableName: 'child3Variable2',
      type: 'Child3Type2',
    } as NodeReference,
    {
      variableName: 'child3Variable3',
      type: 'Child3Type3',
    } as NodeReference,
  ]);

  // done preparing children
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
      children: [child1, child2, child3] as Node[],
    } as RectNodeFields,
  );

  const found = rectNode.getReferences();
  const wanted = [
    {
      variableName: 'brownFillAndStrokeRectSquareCircular',
      type: 'Rect',
    } as NodeReference,
    {
      variableName: 'child1Variable',
      type: 'Child1Type',
    } as NodeReference,
    {
      variableName: 'child2Variable',
      type: 'Child2Type',
    } as NodeReference,
    {
      variableName: 'child2Variable2',
      type: 'Child2Type2',
    } as NodeReference,
    {
      variableName: 'child3Variable',
      type: 'Child3Type',
    } as NodeReference,
    {
      variableName: 'child3Variable2',
      type: 'Child3Type2',
    } as NodeReference,
    {
      variableName: 'child3Variable3',
      type: 'Child3Type3',
    } as NodeReference,
  ];


  // start call tests

  camelCaseWrapper
    .received()
    .parse('brown-fill-and-stroke-rect-square-circular');

  // stop call tests

  t.same(found, wanted);
  t.end();
});
