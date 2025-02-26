import t from 'tap'
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { rectSVGString, rectSVGSvgson, rectInkscapeSVG } from './testData';
import { SvgsonWrapper } from '../wrappers/SvgsonWrapper';
import { InitInkscapeSVGFn, InkscapeSVGFields } from './InkscapeSVG';
import { InkscapeSVGAttributesSchema } from './InkscapeSVGAttributesSchema';
import { ElementParserFactory } from './element/ElementParserFactory';
import { _InkscapeSVGParser } from './InkscapeSVGParser';
import { INode } from 'svgson';
import { ElementParser } from './element/ElementParser';

t.test('parse correctly parses', t => {
  const svgson = Substitute.for<SvgsonWrapper>();
  interface InitInkscapeSVGFnJacket {
    fn: InitInkscapeSVGFn
  }
  const initInkscapeSVGFnJacket = Substitute.for<InitInkscapeSVGFnJacket>();
  const initInkscapeSVGFn = initInkscapeSVGFnJacket.fn;
  const svgAttributesSchema = Substitute.for<InkscapeSVGAttributesSchema>();
  const elementParserFactory = Substitute.for<ElementParserFactory>();

  const inkscapeSVGParser = new _InkscapeSVGParser({
    svgson,
    initInkscapeSVGFn,
    svgAttributesSchema,
    elementParserFactory,
  });

  svgson
    .parseSync(rectSVGString)
    .returns(rectSVGSvgson);

  svgAttributesSchema
    .parse(rectSVGSvgson.attributes)
    .returns({
      height: rectSVGSvgson.attributes.height,
      width: rectSVGSvgson.attributes.width,
      viewBox: rectSVGSvgson.attributes.viewBox,
    });

  const rectSVGSvgsonElements: INode[] = rectSVGSvgson
    .children[2]
    .children as INode[];

  let rectElementParser = Substitute.for<ElementParser>();
  let elementParsers = rectSVGSvgsonElements
    .map((element, i) => {
      rectElementParser.parse(element as INode)
        .returns(rectInkscapeSVG.elements[i]);
      return rectElementParser;
    });

  elementParserFactory
    .init(Arg.any())
    .returns(
      elementParsers[0], ...elementParsers.slice(1));

  initInkscapeSVGFnJacket
    .fn({
      elements: rectInkscapeSVG.elements,
      height: rectInkscapeSVG.height,
      width: rectInkscapeSVG.width,
      viewBox: rectInkscapeSVG.viewBox,
    } as InkscapeSVGFields)
    .returns(rectInkscapeSVG);

  let found = inkscapeSVGParser.parse(rectSVGString);
  const wanted = rectInkscapeSVG;

  // - start verify internal function calls -
  svgson
    .received()
    .parseSync(rectSVGString);

  svgAttributesSchema
    .received()
    .parse(rectSVGSvgson.attributes);

  t.equal(rectSVGSvgsonElements.length, elementParsers.length);
  for (let i = 0; i < rectSVGSvgsonElements.length; i++) {
    elementParserFactory.received().init(rectSVGSvgsonElements[i]);
    rectElementParser.received().parse(rectSVGSvgsonElements[i]);
  }
  // - end verify internal function calls -

  t.same(found, wanted);

  t.end();
});
