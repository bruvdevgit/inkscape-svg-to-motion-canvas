import t from 'tap';
import { _MainConfigSchema, MainConfig } from './MainConfigSchema';

t.test('parse correctly parses a MainConfig', t => {
  const mainConfigSchema = new _MainConfigSchema();

  const mainConfig = {
    inkscapeSVGs: [
      {
        input: {
          filePath: "./circles_1920_by_1080.svg",
        },
        output: {
          directoryPath: "./src/inkscapeSVGGenerated",
          viewAdderFunctionName: 'circles1920By1080',
        }
      },
      {
        input: {
          filePath: "./rects_1920_by_1080.svg",
        },
        output: {
          directoryPath: "./src/inkscapeSVGGenerated",
          viewAdderFunctionName: 'rects1920By1080',
        }
      },
    ]
  } as MainConfig;

  const found = mainConfigSchema.parse(mainConfig);
  const wanted = { ...mainConfig };

  t.same(found, wanted);

  t.end()
});

