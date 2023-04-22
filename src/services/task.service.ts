import httpService from './http.service';

const taskEndpoint = 'tasks/';

const taskService = {
  get: async () => {
    const { data } = await httpService.get(taskEndpoint);
    return data;
  }
};

export default taskService;
