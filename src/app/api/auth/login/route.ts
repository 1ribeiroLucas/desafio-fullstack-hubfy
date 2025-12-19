import { IUserLoggedIn, IUserPostLoginRequest } from "@/src/app/types/user/user";
import { loginService } from "@/src/lib/auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  //TODO
  // Validar email e senha
  // retornar JWT token
  // Trocar return por NextResponse.json(loginResponse);
  try {
    const body: IUserPostLoginRequest = await request.json();

    // isLoginInfoValid(body);

    const loginResponse: Promise<NextResponse<IUserLoggedIn>> = loginService(body);

    return loginResponse;
  } catch (error: any) {
    console.log({ error });
    const message = error.message || `Ocorreu um erro inesperado. Por favor, tente novamente dentro de alguns instantes`;
    
    return NextResponse.json({message, status: error.status || 500});
  }
}