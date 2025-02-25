import path from 'path';

export interface PathWrapper {
  relative(from: string, to: string): string;
}

export class _PathWrapper implements PathWrapper {
  relative(from: string, to: string): string {
    return path.relative(from, to);
  }
}

export type InitPathWrapperFn = () => PathWrapper;

export const initPathWrapper: InitPathWrapperFn = () => new _PathWrapper();
