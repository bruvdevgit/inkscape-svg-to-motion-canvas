import { FsWrapper, initFsWrapper } from "../wrappers/FsWrapper";
import { initMainConfigParser, MainConfigParser } from "./MainConfigParser";
import { MainConfig } from "./MainConfigSchema";

// reads the file and parses it
export interface MainConfigLoader {
  load(filename: string): Promise<MainConfig>;
}

export class _MainConfigLoader {
  constructor(public deps: {
    fs: FsWrapper,
    mainConfigParser: MainConfigParser,
  }) { }

  async load(filename: string): Promise<MainConfig> {
    try {
      let callerPath = this.deps.fs.cwd();
      const content = await this.deps.fs.readFile(`${callerPath}/${filename}`);
      const config = this.deps.mainConfigParser.parse(content);
      return Promise.resolve(config);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export type InitMainConfigLoaderFn = () => MainConfigLoader;

export const initMainConfigLoader: InitMainConfigLoaderFn
  = () => new _MainConfigLoader({
    fs: initFsWrapper(),
    mainConfigParser: initMainConfigParser(),
  });
