import t from 'tap'
import { _RectElementParser } from './RectElementParser.ts';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { RectElementAttributesSchema } from './RectElementAttributesSchema.ts';
import { StyleAttributeParser } from '../../styleAttribute/StyleAttributeParser.ts';
import { InitRectElementFn, RectElement, RectElementFields } from './RectElement.ts';
import { rects } from './testData.ts';
import { Node as MotionCanvasNode } from '../../../motionCanvasNodeTree/node/Node.ts';
import { ElementParserFactory } from '../ElementParserFactory.ts';
import { INode } from 'svgson';
import { ElementParser } from '../ElementParser.ts';
import { Element } from '../Element.ts';

t.test('parse correctly parses', t => {
  for (let i = 0; i < rects.length; i++) {
    const svgRectElementSchema = Substitute.for<RectElementAttributesSchema>();
    svgRectElementSchema
      .parse(rects[i].svgsonNode.attributes)
      .returns(rects[i].attributes);

    const rectElement = Substitute.for<RectElement>();

    // A "Jacket" is a concept I made up:
    // It's an object that's made just to have the function
    // of interest as its one and only method. Then,
    // because I can have that object implement an interface,
    // I can use @fluffy-spoon/substitute to mock the function
    // of interest.
    interface InitRectElementFnJacket {
      fn: InitRectElementFn,
    }
    const initRectElementFnJacket = Substitute.for<InitRectElementFnJacket>();
    initRectElementFnJacket
      .fn(rects[i].props)
      .returns(rectElement);

    const svgElementStyleAttributeParser = Substitute.for<StyleAttributeParser>();
    svgElementStyleAttributeParser
      .parse(rects[i].svgsonNode.attributes.style)
      .returns(rects[i].styleAttributes);

    const elementParserFactory = Substitute.for<ElementParserFactory>();

    const rectElementParser = new _RectElementParser({
      svgRectElementSchema,
      initRectElementFn: initRectElementFnJacket.fn,
      svgElementStyleAttributeParser,
      elementParserFactory,
    });

    const found: RectElement = rectElementParser.parse(rects[i].svgsonNode);
    const wanted: RectElement = rectElement;

    // - start verify internal function calls -
    initRectElementFnJacket.received()
      .fn(rects[i].props);

    svgRectElementSchema
      .received()
      .parse(rects[i].svgsonNode.attributes);

    svgElementStyleAttributeParser.received()
      .parse(rects[i].svgsonNode.attributes.style);
    // - end verify internal function calls -

    t.same(found, wanted, `at i=${i}`);
  }

  t.end();
});


t.test('parse correctly parses with sub-children', t => {
  // start the provisions for the children
  const children = rects.slice(1);
  const childrenINodes = children.map(child => child.svgsonNode);
  const childrenParser = Substitute.for<ElementParser>();

  // the same parser for all the children because
  // the parser factory has all nodes of the same
  // type share a parser.
  const childrenParsers = Array(children.length).fill(childrenParser);
  const childrenInkscapeSVGElements = children
    .map(_ => Substitute.for<Element>());

  const elementParserFactory = Substitute.for<ElementParserFactory>();

  childrenINodes.forEach((node, i) => elementParserFactory
    .init(node)
    .returns(childrenParsers[i]));

  childrenParsers
    .forEach((parser, i) => parser
      .parse(childrenINodes[i])
      .returns(childrenInkscapeSVGElements[i]));

  // end the provisions for the children

  const svgRectElementSchema = Substitute.for<RectElementAttributesSchema>();
  svgRectElementSchema
    .parse(rects[0].svgsonNode.attributes)
    .returns(rects[0].attributes);


  const rectElement = Substitute.for<RectElement>();

  // A "Jacket" is a concept I made up:
  // It's an object that's made just to have the function
  // of interest as its one and only method. Then,
  // because I can have that object implement an interface,
  // I can use @fluffy-spoon/substitute to mock the function
  // of interest.
  interface InitRectElementFnJacket {
    fn: InitRectElementFn,
  }
  const initRectElementFnJacket = Substitute.for<InitRectElementFnJacket>();
  initRectElementFnJacket
    .fn({ ...rects[0].props, children: childrenInkscapeSVGElements })
    .returns(rectElement);

  const svgElementStyleAttributeParser = Substitute.for<StyleAttributeParser>();
  svgElementStyleAttributeParser
    .parse(rects[0].svgsonNode.attributes.style)
    .returns(rects[0].styleAttributes);


  const rectElementParser = new _RectElementParser({
    svgRectElementSchema,
    initRectElementFn: initRectElementFnJacket.fn,
    svgElementStyleAttributeParser,
    elementParserFactory,
  });

  const found: RectElement = rectElementParser.parse({
    ...rects[0].svgsonNode, children: childrenINodes
  });
  const wanted: RectElement = rectElement;

  // - start verify internal function calls -

  childrenINodes.forEach((node, i) => elementParserFactory
    .received()
    .init(node)
  );

  childrenParsers
    .forEach((parser, i) => parser
      .received()
      .parse(childrenINodes[i])
    );



  initRectElementFnJacket.received()
    .fn({ ...rects[0].props, children: childrenInkscapeSVGElements });

  svgRectElementSchema
    .received()
    .parse(rects[0].svgsonNode.attributes);

  svgElementStyleAttributeParser.received()
    .parse(rects[0].svgsonNode.attributes.style);
  // - end verify internal function calls -

  t.same(found, wanted,);

  t.end();
});

