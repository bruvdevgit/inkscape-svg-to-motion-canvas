import t from 'tap';
import { _ElementParserFactory } from './ElementParserFactory.ts';
import { ElementParser, InitElementParserFn } from './ElementParser.ts';
import Substitute from '@fluffy-spoon/substitute';
import { rectSVGSvgson } from '../testData.ts';

//function removeUndefinedFields(obj: Object) {
//  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != undefined));
//}

t.test('constructor correctly returns a rect element parser', t => {
  const rectElements = rectSVGSvgson.children[2].children;
  const rectElementParser = Substitute.for<ElementParser>();
  interface InitElementParserFnJacket {
    fn: InitElementParserFn
  }
  const initRectElementParserFnJacket = Substitute.for<InitElementParserFnJacket>();
  initRectElementParserFnJacket.fn().returns(rectElementParser);

  const rectElement = new _ElementParserFactory({
    initRectElementParserFn: initRectElementParserFnJacket.fn,
  });

  t.equal(rectElement.rectElementParser, null);
  for (let i = 0; i < rectElements.length; i++) {
    const found = rectElement.init(
      rectSVGSvgson.children[2].children[1]
    );
    const wanted = rectElementParser;

    t.not(rectElement.rectElementParser, null);

    t.same(found, wanted);
    t.same(rectElement.rectElementParser, wanted);

  }
  t.end();
});

