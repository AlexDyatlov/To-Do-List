import { TaskStatus } from './taskStatus';

export interface ITask {
  id: number;
  completed: boolean;
  name: string;
  status: TaskStatus;
  created_at: string;
}

export interface ITaskIdOnly extends Pick<ITask, 'id'> {}
