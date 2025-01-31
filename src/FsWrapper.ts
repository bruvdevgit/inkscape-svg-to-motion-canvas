import { Abortable } from 'node:events';
import { OpenMode, PathLike } from 'node:fs';
import * as fsImport from 'node:fs/promises';
import * as path from 'path';

export interface FsWrapper {
  formatPathStrFromScriptLocation(p: PathLike): void;
  writeFile(file: fsImport.FileHandle | PathLike,
    data: string | Uint8Array): Promise<void>;

  createDirIfNonExistant(dirName: string): Promise<void>;
}

class _FsWrapper {
  constructor() {
  }

  // TODO: delete me
  //prefixPathWithCallerPath(p: PathLike) {
  //  //return `${path.dirname(process.argv[1])}${p}`;
  //  return `${__dirname}${p}`;
  //}

  async createDirIfNonExistant(dirName: string) {
    try {
      // check if the dir exists
      await fsImport.access(dirName, fsImport.constants.F_OK);
    }
    catch (err) {
      // if the dir doesn't exist, create it
      await fsImport.mkdir(dirName, { recursive: true });
    }
  }

  async writeFile(file: fsImport.FileHandle | PathLike,
    data: string | Uint8Array) {
    return await fsImport.writeFile(
      file,
      data);
  }


  async readFile(
    path: PathLike | fsImport.FileHandle,
  ) {
    return await fsImport.readFile(path, 'utf8');
  }
}

export function createFsWrapper() {
  return new _FsWrapper();
}
