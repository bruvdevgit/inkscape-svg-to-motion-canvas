import { FSWatcher } from "chokidar";

export interface FSWatcherWrapper {
  on(eventName: string | symbol, listener: (path: string) => any): this;
}

class _FSWatcherWrapper implements FSWatcherWrapper {
  fsWatcherDep: FSWatcher;

  constructor(deps: {
    fsWatcher: FSWatcher
  }) {
    this.fsWatcherDep = deps.fsWatcher;
  }

  on(eventName: string | symbol, listener: (path: string) => any): this {
    this.fsWatcherDep.on(eventName, listener as never);
    return this;
  }
}

export function initFSWatcherWrapper(fsWatcher: FSWatcher): FSWatcherWrapper {
  return new _FSWatcherWrapper({ fsWatcher });
}
