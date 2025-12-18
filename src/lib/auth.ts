import { NextRequest, NextResponse } from "next/server";


/**
 * REGISTER
 */
// #####################################
// SERVICES
// #####################################


async function postRegisterService(payload: IPostRegisterRequest): Promise<NextResponse> {

  const message: string = `Usuário criado com sucesso parcinha`;
  const user: IUserPostRegisterResponse = {
    id: 12,
    name: payload.name,
    email: payload.name
  }

  return NextResponse.json({ message, user });
}

export { postRegisterService };