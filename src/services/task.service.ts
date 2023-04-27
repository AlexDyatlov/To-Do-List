import httpService from './http.service';

import { ITask, ITaskIdOnly } from '../@types/task.interface';

const taskEndpoint = 'tasks/';

const taskService = {
  get: async (payload: string) => {
    const { data } = await httpService.get<ITask[]>(taskEndpoint + payload);
    return data;
  },
  createTask: async (payload: ITask) => {
    const { data } = await httpService.post<ITask>(taskEndpoint, payload);
    return data;
  },
  removeTask: async (taskId: ITaskIdOnly) => {
    const { data } = await httpService.delete<Promise<object>>(taskEndpoint + taskId);
    return data;
  },
  completeTask: async (payload: ITask) => {
    const { data } = await httpService.patch<ITask>(taskEndpoint + payload.id, payload);
    return data;
  }
};

export default taskService;
