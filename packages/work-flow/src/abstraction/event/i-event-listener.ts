import type { IEvent } from './i-event';

export interface IEventListener {
  (event: IEvent): void | Promise<void>;
}
