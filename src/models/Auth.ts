export interface IAuth {
  token: string;
}

export interface ILogin {
  login: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
