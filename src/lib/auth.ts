import { NextRequest, NextResponse } from "next/server";

import { IPostRegisterRequest, IPostRegisterResponse } from '@/src/app/types/auth/register';
import { IUserLoggedIn, IUserPostLoginRequest, IUserPostRegisterResponse } from "../app/types/user/user";


// REGISTER
// #####################################
// SERVICES
// #####################################


async function postRegisterService(payload: IPostRegisterRequest): Promise<NextResponse<IPostRegisterResponse>> {

  const message: string = `Usuário criado com sucesso parcinha`;
  const user: IUserPostRegisterResponse = {
    id: 12,
    name: payload.name,
    email: payload.name
  }

  return NextResponse.json({ message, user });
}

// LOGIN
// #####################################
// SERVICES
// #####################################
async function loginService(payload: IUserPostLoginRequest): Promise<NextResponse<IUserLoggedIn>> {
  const response: IUserLoggedIn = {
    token: '0938012indokasmdoi109',
    user: {
      id: 78,
      email: payload.email,
      name: 'Qual Foison'
    }
  }
  
  return NextResponse.json(response);
}

export { postRegisterService, loginService };