import myzod, { Infer } from 'myzod';

const mainConfigSchema = myzod.object({
  inkscapeSVGs: myzod.array(myzod.object({
    input: myzod.object({
      filePath: myzod.string()
        .withPredicate(value => /^(.+)\/([^\/]+)\.svg$/gm.test(value),
          'string must be a valid path to an ".svg" file'),
    }),
    output: myzod.object({
      viewAdderFunctionName: myzod.string()
        .withPredicate(value => /^[$A-Za-z_]?[$0-9A-Za-z_]*$/gm.test(value),
          'string must be a valid function name'),
      directoryPath: myzod.string()
        .withPredicate(value => /^(.+)\/([^\/]+)$/gm.test(value),
          'string must be a directory path'),
    }),
  })),
});

export type MainConfig = Infer<typeof mainConfigSchema>;
export default mainConfigSchema;
