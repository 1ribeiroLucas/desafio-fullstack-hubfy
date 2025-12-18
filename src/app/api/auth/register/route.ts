import { NextResponse, NextRequest } from "next/server";
import { postRegisterService } from '@/src/lib/auth';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: IPostRegisterRequest = await request.json();
    
    // await postRegisterRequestValidation(body);
    
    const postRegister = postRegisterService(body);
    
    return postRegister;
  } catch (error: any) {
    console.log({ error });
    const message = error.message || `Ocorreu um erro inesperado. Por favor, tente novamente dentro de alguns instantes`;
    
    return NextResponse.json({message, status: error.status || 500});
  }
}
