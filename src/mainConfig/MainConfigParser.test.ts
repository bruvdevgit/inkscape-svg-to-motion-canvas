import t from 'tap';
import { _MainConfigParser } from './MainConfigParser';
import { Substitute } from '@fluffy-spoon/substitute';
import { TOMLWrapper } from '../wrappers/TOMLWrapper';
import { MainConfig, MainConfigSchema } from './MainConfigSchema';

t.test('parse correctly parses a MainConfig', t => {
  const tomlParser = Substitute.for<TOMLWrapper>();
  const mainConfigSchema = Substitute.for<MainConfigSchema>();

  const sourceStr = `
[[inkscapeSVGs]]
[inkscapeSVGs.input]
filePath= "./rects_1920_by_1080.svg"
[inkscapeSVGs.output]
viewAdderFunctionName= "rects1920By1080"
directoryPath= "./src/inkscapeSVGGenerated"

[[inkscapeSVGs]]
[inkscapeSVGs.input]
filePath= "./circles_1920_by_1080.svg"
[inkscapeSVGs.output]
viewAdderFunctionName= "circles1920By1080"
directoryPath= "./src/inkscapeSVGGenerated"
`;

  const mainConfig = {
    inkscapeSVGs: [
      {
        input: {
          filePath: "./circles_1920_by_1080.svg",
        },
        output: {
          directoryPath: "./output",
          viewAdderFunctionName: 'circles1920By1080',
        }
      },
      {
        input: {
          filePath: "./rects_1920_by_1080.svg",
        },
        output: {
          directoryPath: "./output",
          viewAdderFunctionName: 'rects1920By1080',
        }
      },
    ]
  } as MainConfig;

  tomlParser.parse(sourceStr).returns({ ...mainConfig });
  mainConfigSchema.parse(mainConfig).returns({ ...mainConfig });

  const mainConfigParser = new _MainConfigParser({
    tomlParser,
    mainConfigSchema,
  });


  const found = mainConfigParser.parse(sourceStr);
  const wanted = { ...mainConfig };

  t.same(found, wanted);

  t.end()
});

