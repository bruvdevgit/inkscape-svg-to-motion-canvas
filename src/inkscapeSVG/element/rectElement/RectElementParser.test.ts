import t from 'tap'
import { _RectElementParser } from './RectElementParser';
import { Substitute } from '@fluffy-spoon/substitute';
import { RectElementAttributesSchema } from './RectElementAttributesSchema';
import { StyleAttributeParser } from '../../styleAttribute/StyleAttributeParser';
import { InitRectElementFn, RectElement, RectElementProps } from './RectElement';
import { rects } from './testData';
import { isDeepStrictEqual } from 'node:util';

function removeUndefinedFields(obj: Object) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != undefined));
}

t.test('parse correctly parses', t => {
  for (let i = 0; i < rects.length; i++) {
    const svgRectElementSchema = Substitute.for<RectElementAttributesSchema>();
    svgRectElementSchema
      .parse(rects[i].svgsonNode.attributes)
      .returns(rects[i].attributes);

    const initRectElementFn: InitRectElementFn = (init: RectElementProps) => {
      const expected = rects[i].props;
      const found = removeUndefinedFields(init);
      if (!isDeepStrictEqual(found, expected))
        throw RangeError(`at i=${i} initRectElementFn was called in an unexpected way     Expected => ${JSON.stringify(expected, null, 4)}     Found => ${JSON.stringify(found, null, 4)}`);
      return rects[i].props as RectElementProps;
    };

    const svgElementStyleAttributeParser = Substitute.for<StyleAttributeParser>();
    svgElementStyleAttributeParser
      .parse(rects[i].svgsonNode.attributes.style)
      .returns(rects[i].styleAttributes);

    const rectElementParser = new _RectElementParser({
      svgRectElementSchema,
      initRectElementFn,
      svgElementStyleAttributeParser,
    });

    const found: RectElement = rectElementParser.parse(rects[i].svgsonNode);
    const wanted: RectElement = rects[i].props;

    // - start verify internal function calls -
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
