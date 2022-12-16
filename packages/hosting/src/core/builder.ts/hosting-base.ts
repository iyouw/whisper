import { IApplicationBuilder } from '../../abstraction/builder/i-application-builder';
import { IHosting } from '../../abstraction/i-hosting';

export abstract class HostingBase<S, A extends IApplicationBuilder> implements IHosting<S, A> {
  protected _actions: Array<(application: A) => void>;

  public abstract get services(): S;

  public constructor() {
    this._actions = new Array<(application: IApplicationBuilder) => void>();
  }

  public configureService(serviceAction: (services: S) => void): HostingBase<S, A> {
    serviceAction(this.services);
    return this;
  }

  public configureApplication(action: (application: A) => void): HostingBase<S, A> {
    this._actions.push(action);
    return this;
  }

  public abstract runAsync(): void;
}
