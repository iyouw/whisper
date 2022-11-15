import type { INode } from '../i-node';

export interface INodeVisitor {
  visiteApp<T>(node: INode): T;
  visiteAbility<T>(node: INode): T;
  visiteIf<T>(node: INode): T;
  visiteParallel<T>(node: INode): T;
  visiteVirtual<T>(node: INode): T;
}
