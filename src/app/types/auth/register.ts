// isolatedModules está ativado
// não há a necessidade de exportar diretamente

interface IPostRegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface IPostRegisterResponse {
  message: string;
  user: IUserPostRegisterResponse;
}