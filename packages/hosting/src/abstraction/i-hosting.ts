import { IApplicationBuilder } from './builder/i-application-builder';

export interface IHosting<S, A extends IApplicationBuilder> {
  configureService(serviceAction: (services: S) => void): IHosting<S, A>;
  configureApplication(applicationAction: (application: A) => void): IHosting<S, A>;
  runAsync(): void;
}
