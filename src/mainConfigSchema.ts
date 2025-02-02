import myzod, { Infer } from 'myzod';

const mainConfigSchema = myzod.object({
  inkscapeSVGs: myzod.array(myzod.object({
    input: myzod.object({
      filePath: myzod.string().pattern(/^[a-z]:((\\|\/)[a-z0-9\s_@\-^!#$%&+={}\[\]]+)+\.svg$/i),
    }),
    output: myzod.object({
      viewAdderFunctionName: myzod.string().pattern(/^[$A-Z_][0-9A-Z_$]*$/i),
      directoryPath: myzod.string().pattern(/^[a-z]:((\\|\/)[a-z0-9\s_@\-^!#$%&+={}\[\]]+)+$/i),
    }),
  })),
});

export type MainConfig = Infer<typeof mainConfigSchema>;
export default mainConfigSchema;
