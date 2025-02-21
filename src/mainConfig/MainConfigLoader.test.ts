import t from 'tap';
import {Arg, Substitute} from '@fluffy-spoon/substitute';
import { _MainConfigLoader, MainConfigLoader } from './MainConfigLoader.ts';
import { MainConfig } from './MainConfigSchema.ts';
import { FsWrapper } from '../../wrappers/FsWrapper.ts';
import { MainConfigParser } from './MainConfigParser.ts';

t.test('load loads the main config correctly', async t => {
  const fs = Substitute.for<FsWrapper>();
  const mainConfigParser = Substitute.for<MainConfigParser>();

  fs.cwd().returns('caller/path/example');
  fs.readFile('caller/path/example/exampler.ts')
    .returns(Promise.resolve('tomlContent: "example"'));

  const mainConfig = {
    inkscapeSVGs: [
      {
        input: {
          filePath: "./circles_1920_by_1080.svg",
        },
        output: {
          viewAdderFunctionName: 'circles1920By1080',
        }
      },
      {
        input: {
          filePath: "./rects_1920_by_1080.svg",
        },
        output: {
          viewAdderFunctionName: 'rects1920By1080',
        }
      },
    ]
  } as MainConfig;

  mainConfigParser.parse('tomlContent: "example"')
    .returns({ ...mainConfig });

  const loader = new _MainConfigLoader({
    fs,
    mainConfigParser,
  });

  const found = await loader.load('exampler.ts');
  const wanted = { ...mainConfig } as MainConfig;

  // start testing internal calls

  fs.received().cwd();
  fs.received().readFile('caller/path/example/exampler.ts');
  mainConfigParser.received().parse('tomlContent: "example"');

  // end testing internal calls

  t.same(found, wanted);

  t.pass();
  t.end();
});
