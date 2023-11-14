export interface IRoom {
  link: string;
  name: string;
  color: string;
  objects: IObject[];
}

export interface IObject {
  _id: string;
  meet: string;
  name: string;
  x: number;
  y: number;
  zIndex: number;
  orientation: string;
}
