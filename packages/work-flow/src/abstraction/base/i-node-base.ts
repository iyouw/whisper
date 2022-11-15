export interface INodeBase<T extends INodeBase<T>> {
  readonly id: string | number;
  name: string;

  readonly root: T;
  readonly parent?: T;
  readonly children: Array<T>;
  readonly isLeaf: boolean;

  readonly firstChild?: T;
  readonly lastChild?: T;
  readonly previousSibling?: T;
  readonly nextSibling?: T;

  insertBefore(node: T, before: T): T;
  insertAfter(node: T, after: T): T;
  prependChild(node: T): T;
  appendChild(node: T): T;
  decendant(): Array<T>;
}
