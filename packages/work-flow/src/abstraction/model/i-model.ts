export interface IModel {
  id: string | number;
  name: string;
  type: number;
  metaId: string | number;
  children: Array<IModel>;
}
