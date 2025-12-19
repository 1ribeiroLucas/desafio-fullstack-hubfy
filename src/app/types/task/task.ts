export enum ETaskStatus {
  NOT_STARTED = "tá moscano",
  IN_PROGRESS = "na caminhada",
  COMPLETED = "tá pá",
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: ETaskStatus;
}

export interface ITaskRequestResponse {
  task: ITask;
}

export interface ITaskDeleteResponse {
  message: string;
}
