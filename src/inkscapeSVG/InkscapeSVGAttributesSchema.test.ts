import t from 'tap';
import { _InkscapeSVGAttributesSchema } from './InkscapeSVGAttributesSchema.ts';
import { rectSVGSvgson } from './testData.ts';

t.test('parse correctly processes a read Inkscape SVG', t => {
  const inkscapeSVGAttributesSchema = new _InkscapeSVGAttributesSchema();

  t.same(inkscapeSVGAttributesSchema.parse(rectSVGSvgson.attributes), {
    "width": "1920",
    "height": "1080",
    "viewBox": "0 0 508 285.75",
  });

  t.end()
});

