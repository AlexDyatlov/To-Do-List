import { createAsyncThunk } from '@reduxjs/toolkit';

import taskService from '../../services/task.service';

import { ITask, ITaskIdOnly } from '../../@types/task.interface';
import { IFiltersParams } from '../../@types/filtersParams.interface';

export const fetchTasks = createAsyncThunk<ITask[], IFiltersParams>(
  'tasks/fetchTasksStatus',
  async (payload: IFiltersParams) => {
    const content = await taskService.get(payload);

    return content;
  }
);

export const createNewTask = createAsyncThunk<ITask, ITask>(
  'tasks/createTaskStatus',
  async (payload: ITask) => {
    const content = await taskService.createTask(payload);

    return content;
  }
);

export const deleteTask = createAsyncThunk<{ taskId: ITaskIdOnly; content: object }, ITaskIdOnly>(
  'tasks/deleteTaskStatus',
  async (taskId: ITaskIdOnly) => {
    const content = await taskService.removeTask(taskId);
    return { taskId, content };
  }
);

export const finishTask = createAsyncThunk<ITask, ITask>(
  'tasks/completeTaskStatus',
  async (payload: ITask) => {
    const content = await taskService.completeTask(payload);
    return content;
  }
);
