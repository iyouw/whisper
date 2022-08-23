import type { IAppContext } from './app-context.js';

export interface RequestDelegate {
  (context: IAppContext): Promise<void>;
}

export interface IApplication {
  readonly middlewares: Array<RequestDelegate>;
  use(requestDelegate: RequestDelegate): void;
}

export class Application implements IApplication {
  public readonly middlewares = new Array<RequestDelegate>();

  public use(requestDelegate: RequestDelegate): void {
    this.middlewares.push(requestDelegate);
  }
}
