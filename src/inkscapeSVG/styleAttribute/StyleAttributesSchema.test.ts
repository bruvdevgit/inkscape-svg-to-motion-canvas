import t from 'tap';
import { _StyleAttributesSchema } from './StyleAttributesSchema.ts';
import { testData } from './testData.ts';

t.test('parse correctly processes valid data', t => {
  const styleAttributesSchema = new _StyleAttributesSchema();

  for (let i = 0; i < 31; i++) {
    t.equal(styleAttributesSchema.parse(testData[i].schemaOutput), testData[i].schemaOutput, `at idx: ${i}`);
  }

  t.end()
});

