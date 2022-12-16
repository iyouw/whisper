import { IApplicationBuilder } from './i-application-builder';
import { App } from 'vue';
import { Router } from 'vue-router';
import { Pinia } from 'pinia';

export interface IVueApplicationBuilder extends IApplicationBuilder {
  configureRouter(routerAction: (router: Router) => void): IVueApplicationBuilder;
  configureStore(storeAction: (store: Pinia) => void): IVueApplicationBuilder;
  configure(appAction: (app: App) => void): IVueApplicationBuilder;
}
