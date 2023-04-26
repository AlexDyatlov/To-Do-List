import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import taskService from '../services/task.service';

import { ITask, ITaskIdOnly } from '../@types/task.interface';

import { RootState } from './createStore';

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface TaskSliceState {
  items: ITask[];
  status: Status;
}

const initialState: TaskSliceState = {
  items: [],
  status: Status.LOADING
};

export const fetchTasks = createAsyncThunk<ITask[]>('tasks/fetchTasksStatus', async () => {
  const content = await taskService.get();

  return content;
});

export const createNewTask = createAsyncThunk<ITask, ITask>('tasks/createTaskStatus', async (payload: ITask) => {
  const content = await taskService.createTask(payload);

  return content;
});

export const deleteTask = createAsyncThunk<{ taskId: ITaskIdOnly, content: object }, ITaskIdOnly>('tasks/deleteTaskStatus', async (taskId: ITaskIdOnly) => {
  const content = await taskService.removeTask(taskId);
  return { taskId, content };
});

export const finishTask = createAsyncThunk<ITask, ITask>('tasks/completeTaskStatus', async (payload: ITask) => {
  const content = await taskService.completeTask(payload);
  return content;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getItems: (state, { payload }: PayloadAction<ITask[]>) => {
      state.items = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(createNewTask.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(createNewTask.fulfilled, (state, { payload }) => {
      state.items.push(payload);
      state.status = Status.SUCCESS;
    });
    builder.addCase(createNewTask.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(deleteTask.fulfilled, (state, { payload: { taskId } }) => {
      state.items = state.items.filter(t => (t.id as unknown as ITaskIdOnly) !== taskId);
      state.status = Status.SUCCESS;
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(finishTask.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(finishTask.fulfilled, (state, { payload }) => {
      state.items[state.items.findIndex(t => t.id === payload.id)] = payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(finishTask.rejected, (state) => {
      state.status = Status.ERROR;
    });
  }
});

const { reducer: tasksReducer } = tasksSlice;

export const getTasks = () => (state: RootState) => state.tasks.items;
export const getTasksLoadingStatus = () => (state: RootState) => state.tasks.status;

export default tasksReducer;
