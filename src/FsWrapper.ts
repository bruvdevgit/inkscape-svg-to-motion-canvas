import { makeDirectory, Options as MakeDirectoryOptions } from 'make-dir';
import { PathLike } from 'node:fs';
import * as fsImport from 'node:fs/promises';

export interface FsWrapper {
  makeDirectory(path: string, options?: MakeDirectoryOptions): Promise<string>;
  writeFile(file: fsImport.FileHandle | PathLike,
    data: string | Uint8Array): Promise<void>;
  readFile(
    path: PathLike | fsImport.FileHandle,
  ): Promise<string>;
}

class _FsWrapper implements FsWrapper {
  constructor() {
  }

  async makeDirectory(path: string, options?: MakeDirectoryOptions): Promise<string> {
    return await makeDirectory(path, options);
  }

  async writeFile(file: fsImport.FileHandle | PathLike,
    data: string | Uint8Array) {
    return await fsImport.writeFile(
      file,
      data);
  }

  async readFile(
    path: PathLike | fsImport.FileHandle,
  ): Promise<string> {
    return await fsImport.readFile(path, 'utf8');
  }
}

export function initFsWrapper(): FsWrapper {
  return new _FsWrapper();
}
