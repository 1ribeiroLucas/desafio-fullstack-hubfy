import { IUserPostRegisterResponse } from '@/src/app/types/user/user';

export interface IPostRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface IPostRegisterResponse {
  message: string;
  user: IUserPostRegisterResponse;
}