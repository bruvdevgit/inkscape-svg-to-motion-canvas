import chokidar, { ChokidarOptions } from "chokidar";
import { FSWatcherWrapper, initFSWatcherWrapper } from './FSWatcherWrapper.ts';

export interface ChokidarWrapper {
  watch(paths: string | string[], options?: ChokidarOptions): FSWatcherWrapper;
}

class _ChokidarWrapper implements ChokidarWrapper {
  watch(paths: string | string[], options?: ChokidarOptions): FSWatcherWrapper {
    return initFSWatcherWrapper(chokidar.watch(paths, options));
  }
}

export function initChokidarWrapper(): ChokidarWrapper {
  return new _ChokidarWrapper();
}
