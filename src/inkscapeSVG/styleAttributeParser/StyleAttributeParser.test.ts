import t from 'tap'
import { _StyleAttributeParser } from './StyleAttributeParser';
import { Substitute } from '@fluffy-spoon/substitute';
import { InlineStyleParserWrapper } from './InlineStyleParserWrapper';
import { StyleAttributesSchema } from './StyleAttributesSchema';
import { testData } from './testData';

function removeEmpty(obj: Object) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v != undefined));
}

t.test('parse correctly parses', t => {

  for (let i = 0; i < 31; i++) {
    const inlineStyleParser = Substitute.for<InlineStyleParserWrapper>();
    const styleAttributesSchema = Substitute.for<StyleAttributesSchema>();

    const styleAttributesParser = new _StyleAttributeParser({
      inlineStyleParser,
      styleAttributesSchema,
    });


    inlineStyleParser
      .parse(testData[i].source)
      .returns(testData[i].inlineParserDeclaration);
    styleAttributesSchema
      .parse(testData[i].schemaOutput)
      .returns(testData[i].schemaOutput);

    let found = styleAttributesParser.parse(testData[i].source);
    // workaround because tap.same does not count an undefined property as the same
    // as a property explicitly defined and assigned undefined as a value
    found = removeEmpty(found);
    const wanted = testData[i].final;

    t.same(removeEmpty(found), wanted, `at idx: ${i}`);
  }

  t.end();
});
