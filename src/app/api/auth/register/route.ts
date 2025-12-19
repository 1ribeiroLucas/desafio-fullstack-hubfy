import { NextResponse, NextRequest } from "next/server";
import { postRegisterService } from '@/src/lib/auth';

import { IPostRegisterRequest } from '@/src/app/types/auth/register';

export async function POST(request: NextRequest): Promise<NextResponse> {
  //TODO
  // - Validar email único
  // - Validar senha forte
  // Trocar return por NextResponse.json(postRegisterResponse);

  try {
    const body: IPostRegisterRequest = await request.json();
    
    // await postRegisterRequestValidation(body);
    
    const postRegisterResponse = postRegisterService(body);
    
    return postRegisterResponse;
  } catch (error: any) {
    console.log({ error });
    const message = error.message || `Ocorreu um erro inesperado. Por favor, tente novamente dentro de alguns instantes`;
    
    return NextResponse.json({message, status: error.status || 500});
  }
}
