export interface IEvent {
  readonly type: string;
  readonly target: unknown;
  readonly path: Array<unknown>;

  addPath(target: unknown): IEvent;
}
