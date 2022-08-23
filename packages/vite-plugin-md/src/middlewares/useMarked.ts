import { marked } from 'marked';

export type Marked = typeof marked;
export type ConfigMarked = (mk: Marked) => void;

export interface IApplication {
  useMarked(configMarked: ConfigMarked): void;
}
