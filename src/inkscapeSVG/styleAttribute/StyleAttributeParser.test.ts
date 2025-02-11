import t from 'tap'
import { _StyleAttributeParser } from './StyleAttributeParser';
import { Substitute } from '@fluffy-spoon/substitute';
import { StyleAttributesSchema } from './StyleAttributesSchema';
import { testData } from './testData';
import { InlineStyleParserWrapper } from '../../wrappers/InlineStyleParserWrapper';

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
    const wanted = testData[i].final;

    // - start verify internal function calls -
    inlineStyleParser
      .received()
      .parse(testData[i].source);
    styleAttributesSchema
      .received()
      .parse(testData[i].schemaOutput);
    // - end verify internal function calls -

    t.same(found, wanted, `at idx: ${i}`);
  }

  t.end();
});
