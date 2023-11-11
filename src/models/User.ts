export interface IUser {
  id: string | null;
  name: string | null;
  avatar: string | null;
}

export interface IUpdateUser {
  name: string | null;
  avatar: string | null;
}
