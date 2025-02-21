import myzod, { Infer } from 'myzod';
import { ObjectOptions, PathOptions } from 'myzod/libs/types';

const inkscapeSVGSchema = myzod.object({
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
});

const mainConfigSchema = myzod.object({
  inkscapeSVGs: myzod.array(inkscapeSVGSchema),
});

export type InkscapeSVGConfig = Infer<typeof inkscapeSVGSchema>;
export type MainConfig = Infer<typeof mainConfigSchema>;

export interface MainConfigSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): MainConfig;
}

export class _MainConfigSchema implements MainConfigSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): MainConfig {
    return mainConfigSchema.parse(value, parseOpts);
  }
}

export function initMainConfigSchema(): MainConfigSchema {
  return new _MainConfigSchema();
}
