export interface IEvent {
  type: string;
  target?: unknown;
  path?: Array<unknown>;
}
