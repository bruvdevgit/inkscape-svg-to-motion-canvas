import path from 'path';

export interface PathWrapper {
  relative(from: string, to: string): string;
  normalize(path: string): string;
}

export class _PathWrapper implements PathWrapper {
  relative(from: string, to: string): string {
    return path.relative(from, to);
  }

  normalize(path: string): string {
    return path.normalize(path);
  }
}

export type InitPathWrapperFn = () => PathWrapper;

export const initPathWrapper: InitPathWrapperFn = () => new _PathWrapper();
