import { initTOMLWrapper, TOMLWrapper } from "../wrappers/TOMLWrapper";
import { initMainConfigSchema, MainConfig, MainConfigSchema } from "./MainConfigSchema";

export interface MainConfigParser {
  parse(content: string): MainConfig;
}

export class _MainConfigParser implements MainConfigParser {
  constructor(public deps: {
    tomlParser: TOMLWrapper,
    mainConfigSchema: MainConfigSchema,
  }) { }

  parse(content: string): MainConfig {
    const tomlContent = this.deps.tomlParser.parse(content);
    const config = this.deps.mainConfigSchema.parse(tomlContent);
    return config;
  }
}

export type InitMainConfigParserFn = () => MainConfigParser;

export const initMainConfigParser = () => new _MainConfigParser({
  tomlParser: initTOMLWrapper(),
  mainConfigSchema: initMainConfigSchema(),
});
