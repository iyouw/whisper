import type { IEventTarget } from '../event/i-event-target';

export interface IDesigner extends IEventTarget {
  renderModel(): IDesigner;
}
