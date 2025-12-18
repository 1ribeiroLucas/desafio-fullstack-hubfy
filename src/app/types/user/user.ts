export interface IUser {
  id: number,
  name: string,
  email: string,
  password: string,
}

//TODO: corrigir esse disable
// eslint-disable-next-line
export interface IUserPostRegisterResponse extends Omit<IUser, 'password'> {}

//TODO: corrigir esse disable
// eslint-disable-next-line
export interface IUserPostLoginRequest extends Omit<IUser, 'name' | 'id'> {}

export interface IUserLoggedIn {
  token: string;
  user: IUserPostRegisterResponse;
}