import type { INodeBase } from '../base/i-node-base';
import type { INodeVisitor } from './visitor/i-node-visitor';

export interface INode extends INodeBase<INode> {
  readonly isApp: boolean;
  readonly isAbility: boolean;
  readonly isIf: boolean;
  readonly isParallel: boolean;
  readonly isVirtual: boolean;

  accept<T>(visitor: INodeVisitor): T;
}
