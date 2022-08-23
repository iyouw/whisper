export interface IFileImport {
  readonly raw: string;
  readonly path: string;
  fileName?: string;
  content?: string;
}

export class FileImport implements IFileImport {
  constructor(
    public raw: string,
    public path: string,
    public fileName?: string,
    public content?: string
  ) {}
}
