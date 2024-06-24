export interface ITask {
  id: number;
  completed: boolean;
  name: string;
  status: string;
  created_at: string;
}

export interface ICompleteTask {
  id: number;
  completed: boolean;
}

export interface ITaskIdOnly extends Pick<ITask, 'id'> {}
