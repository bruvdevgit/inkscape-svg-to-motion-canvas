import t from 'tap';
import { _RectElementAttributesSchema } from './RectElementAttributesSchema';
import { rects } from './testData';

function removeUndefinedFields(obj: Object) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != undefined));
}

t.test('parse correctly processes valid data', t => {
  const styleAttributesSchema = new _RectElementAttributesSchema();
  for (let i = 0; i < rects.length; i++) {
    const attributesSchema = rects[i].svgsonNode.attributes;

    const found = removeUndefinedFields(styleAttributesSchema.parse(attributesSchema));
    t.same(found,
      attributesSchema, `at idx: ${i}`);
  }

  t.end();
});

