import { IEvent } from '../../abstraction';

export class Event implements IEvent {
  public readonly type: string;

  public readonly target: unknown;

  public readonly path: Array<unknown>;

  public constructor(type: string, target: unknown) {
    this.type = type;
    this.target = target;
    this.path = new Array<unknown>();

    this.addPath(target);
  }

  public addPath(target: unknown): Event {
    this.path.unshift(target);
    return this;
  }
}
