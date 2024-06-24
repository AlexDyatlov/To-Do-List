import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import configFile from '../config.json';

import { ICompleteTask, ITask, ITaskIdOnly } from '../@types/task.interface';
import { IFiltersParams } from '../@types/filtersParams.interface';

const taskEndpoint = 'tasks/';

export const taskAPI = createApi({
  reducerPath: 'taskAPI',
  baseQuery: fetchBaseQuery({ baseUrl: configFile.apiEndpoint }),
  tagTypes: ['Task'],
  endpoints: (build) => ({
    fetchTasksAll: build.query<ITask[], IFiltersParams>({
      query: ({ taskStatus, taskCompleted }) => {
        const params: Record<string, string> = {};
        if (taskStatus) {
          params.status = taskStatus;
        }

        if (taskCompleted) {
          params.completed = taskCompleted;
        }

        return {
          url: taskEndpoint,
          params
        };
      },
      providesTags: (result) => ['Task']
    }),
    createTask: build.mutation<ITask, ITask>({
      query: (task) => ({
        url: taskEndpoint,
        method: 'POST',
        body: task
      }),
      invalidatesTags: ['Task']
    }),
    removeTask: build.mutation<ITaskIdOnly, ITaskIdOnly>({
      query: (id) => ({
        url: `${taskEndpoint}${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Task']
    }),
    completeTask: build.mutation<void, ICompleteTask>({
      query: ({ id, completed }) => ({
        url: `${taskEndpoint}${id}`,
        method: 'PATCH',
        body: { completed }
      }),
      invalidatesTags: ['Task']
    })
  })
});
