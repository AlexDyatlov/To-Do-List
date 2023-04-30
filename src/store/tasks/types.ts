import { ITask } from '../../@types/task.interface';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface TaskSliceState {
  items: ITask[];
  status: Status;
}
