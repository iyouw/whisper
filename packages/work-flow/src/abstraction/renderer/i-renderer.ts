import { INodeBase } from '../base/i-node-base';
import { INode } from '../node/i-node';

export interface IRenderer extends INodeBase<IRenderer> {
  readonly node: INode;
}
