import httpService from './http.service';

import { ITask } from '../@types/task.interface';

const taskEndpoint = 'tasks/';

const taskService = {
  get: async () => {
    const { data } = await httpService.get<ITask[]>(taskEndpoint);
    return data;
  }
};

export default taskService;
