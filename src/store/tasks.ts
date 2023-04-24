import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import taskService from '../services/task.service';

import { ITask } from '../@types/task.interface';

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
  }
});

const { reducer: tasksReducer } = tasksSlice;

export const getTasks = () => (state: RootState) => state.tasks.items;
export const getTasksLoadingStatus = () => (state: RootState) => state.tasks.status;

export default tasksReducer;
