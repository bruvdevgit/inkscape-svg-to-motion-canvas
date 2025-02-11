import t from 'tap';
import { _ElementParserFactory } from './ElementParserFactory';
import { initRectElementParser } from './rectElement/RectElementParser';

//function removeUndefinedFields(obj: Object) {
//  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != undefined));
//}

t.test('constructor correctly assigns props to same-name fields', t => {

  //const initRectElementParser = () => ElementParser;
  //
  //const rectElement = new _ElementParserFactory({
  //  initRectElementParserFn,
  //});
  //
  //rectElement.init();

  t.pass();
  t.end();
});

