import t from 'tap'
import { _RectElementParser } from './RectElementParser';
import { Substitute } from '@fluffy-spoon/substitute';
import { RectElementAttributesSchema } from './RectElementAttributesSchema';
import { StyleAttributeParser } from '../../styleAttribute/StyleAttributeParser';
import { InitRectElementFn, RectElement, RectElementFields } from './RectElement';
import { rects } from './testData';

t.test('parse correctly parses', t => {
  for (let i = 0; i < rects.length; i++) {
    const svgRectElementSchema = Substitute.for<RectElementAttributesSchema>();
    svgRectElementSchema
      .parse(rects[i].svgsonNode.attributes)
      .returns(rects[i].attributes);

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
      .returns(rects[i].props as RectElementFields);

    const svgElementStyleAttributeParser = Substitute.for<StyleAttributeParser>();
    svgElementStyleAttributeParser
      .parse(rects[i].svgsonNode.attributes.style)
      .returns(rects[i].styleAttributes);

    const rectElementParser = new _RectElementParser({
      svgRectElementSchema,
      initRectElementFn: initRectElementFnJacket.fn,
      svgElementStyleAttributeParser,
    });

    const found: RectElement = rectElementParser.parse(rects[i].svgsonNode);
    const wanted: RectElement = rects[i].props;

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
