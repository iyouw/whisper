/* eslint-disable class-methods-use-this */
import { HostingBase } from './builder.ts/hosting-base';

import { Container } from 'inversify';
import { IVueApplicationBuilder } from '../abstraction/builder/i-vue-application-builder';
import { VueApplicationBuilder } from './builder.ts/vue-application-builder';

export class Hosting extends HostingBase<Container, IVueApplicationBuilder> {
  public override get services(): Container {
    return new Container();
  }

  public override runAsync(): void {
    const appBuilder = new VueApplicationBuilder();
    this._actions.forEach((action) => action(appBuilder));
    appBuilder.build();
  }
}
