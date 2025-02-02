import myzod, { Infer } from 'myzod';

const mainConfigSchema = myzod.object({
  inkscapeSVGs: myzod.array(myzod.object({
    input: myzod.object({
      filePath: myzod.string().pattern(/^(.+)\/([^\/]+)\.svg$/gm),
    }),
    output: myzod.object({
      viewAdderFunctionName: myzod.string().pattern(/^[$A-Za-z_]?[$0-9A-Za-z_]*$/gm),
      directoryPath: myzod.string().pattern(/^(.+)\/([^\/]+)$/gm),
    }),
  })),
});

export type MainConfig = Infer<typeof mainConfigSchema>;
export default mainConfigSchema;
