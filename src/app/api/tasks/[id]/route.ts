import {
  ETaskStatus,
  ITaskDeleteResponse,
  ITaskRequestResponse,
} from "@/src/app/types/task/task";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<
  NextResponse<ITaskRequestResponse | { message: string; status: number }>
> {
  try {
    if (request) {
      const body = await request.json!();
      console.log({ body });
    }
    const id = (await params).id;
    //placeholder
    const task: ITaskRequestResponse = {
      task: {
        id: Number(id),
        title: "A tarefa",
        description: "Aquela lá mesmo",
        status: ETaskStatus.IN_PROGRESS,
      },
    };
    return NextResponse.json(task);
  } catch (error: any) {
    const message =
      error.message ||
      "Ocorreu um erro inesperado. Por favor, tente novamente dentro de alguns instantes";

    return NextResponse.json({ message, status: error.status || 500 });
  }
}

export async function DELETE(
  _,
  { params }: { params: Promise<{ id: string }> }
): Promise<
  NextResponse<ITaskDeleteResponse> | { message: string; status: number }
> {
  try {
    const id = (await params).id;
    return NextResponse.json({ message: `tarefa ${id} Deitou sem sono` });
  } catch (error: any) {
    const message =
      error.message ||
      "Ocorreu um erro inesperado. Por favor, tente novamente dentro de alguns instantes";

    return NextResponse.json({ message, status: error.status || 500 });
  }
}
