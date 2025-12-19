import { NextResponse, NextRequest } from "next/server";
import {
  ETaskStatus,
  ITask,
  ITaskRequestResponse,
} from "../../types/task/task";

export async function GET(): Promise<NextResponse> {
  try {
    const tasks: ITask[] = [
      {
        id: 1,
        title: "Tarefita",
        description: "uma tarefa top para ser atarefada",
        status: ETaskStatus.NOT_STARTED,
      },
      {
        id: 2,
        title: "A tal da tarefa",
        description: "tarefa naqueles pique",
        status: ETaskStatus.IN_PROGRESS,
      },
      {
        id: 3,
        title: "Tarefa pá",
        description: "chegar na casca do ovo, de pantufa",
        status: ETaskStatus.COMPLETED,
      },
    ];
    return NextResponse.json({
      tasks,
    });
  } catch (error: any) {
    console.log({ error });
    const message =
      error.message ||
      `Ocorreu um erro inesperado. Por favor, tente novamente dentro de alguns instantes`;

    return NextResponse.json({ message, status: error.status || 500 });
  }
}

export async function POST(
  request: NextRequest
): Promise<
  NextResponse<ITaskRequestResponse | { message: string; status: number }>
> {
  try {
    const task: ITaskRequestResponse = await request.json();
    return NextResponse.json(task);
  } catch (error: any) {
    console.log({ error });
    const message =
      error.message ||
      `Ocorreu um erro inesperado. Por favor, tente novamente dentro de alguns instantes`;

    return NextResponse.json({ message, status: error.status || 500 });
  }
}


