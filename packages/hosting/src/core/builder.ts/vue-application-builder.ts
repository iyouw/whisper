import { App, createApp, Component } from 'vue';
import { Router, createRouter, createWebHistory } from 'vue-router';
import { createPinia, Pinia } from 'pinia';
import { IVueApplicationBuilder } from '../../abstraction/builder/i-vue-application-builder';

export class VueApplicationBuilder implements IVueApplicationBuilder {
  private _root?: Component;

  private _router: Router;

  private _store: Pinia;

  private _actions: Array<(app: App) => void>;

  public constructor() {
    this._router = createRouter({
      history: createWebHistory(''),
      routes: [],
    });
    this._store = createPinia();
    this._actions = Array<(app: App) => void>();
  }

  public configureRouter(routerAction: (router: Router) => void): IVueApplicationBuilder {
    routerAction(this._router);
    return this;
  }

  public configureStore(storeAction: (store: Pinia) => void): IVueApplicationBuilder {
    storeAction(this._store);
    return this;
  }

  public configure(appAction: (app: App) => void): IVueApplicationBuilder {
    this._actions.push(appAction);
    return this;
  }

  public build(): App {
    const app = createApp(this._root!);
    app.use(this._router);
    app.use(this._store);
    this._actions.forEach((configure) => configure(app));
    return app;
  }
}
