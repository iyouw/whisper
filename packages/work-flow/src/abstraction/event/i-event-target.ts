import type { IEvent } from './i-event';
import type { IEventListener } from './i-event-listener';
import type { IEventListenerOption } from './i-event-listener-option';

export interface IEventTarget {
  on(type: string, handler: IEventListener, option?: IEventListenerOption): IEventTarget;
  off(type: string, handler?: IEventListener): IEventTarget;
  dispatch(event: IEvent): IEventTarget;
}
