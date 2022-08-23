import type { IFileImport } from './file-import.js';

export interface IRender {
  (context: IAppContext): Promise<string>;
}

export interface IAppContext {
  readonly file: string;
  readonly content: string;
  readonly imports: Array<IFileImport>;
  html: string;
  meta: Record<string, any>;
  render: IRender;
}

export function defaultRender(context: IAppContext): Promise<string> {
  return Promise.resolve(context.html);
}

export class AppContext implements IAppContext {
  constructor(
    public file: string,
    public content: string,
    public html: string = '',
    public meta: Record<string, any> = {},
    public imports: Array<IFileImport> = [],
    public render: IRender = defaultRender
  ) {}
}
