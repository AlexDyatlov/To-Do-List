import httpService from './http.service';

import { ITask, ITaskIdOnly } from '../@types/task.interface';

const taskEndpoint = 'tasks/';

const taskService = {
  get: async () => {
    const { data } = await httpService.get<ITask[]>(taskEndpoint);
    return data;
  },
  createTask: async (payload: ITask) => {
    const { data } = await httpService.post<ITask>(taskEndpoint, payload);
    return data;
  },
  removeTask: async (taskId: ITaskIdOnly) => {
    const { data } = await httpService.delete<Promise<object>>(taskEndpoint + taskId);
    return data;
  }
};

export default taskService;
