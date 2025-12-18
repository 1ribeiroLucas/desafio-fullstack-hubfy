interface IUser {
  id: number,
  name: string,
  email: string,
  password: string,
}

//TODO: corrigir esse disable
// eslint-disable-next-line
interface IUserPostRegisterResponse extends Omit<IUser, 'password'> {}