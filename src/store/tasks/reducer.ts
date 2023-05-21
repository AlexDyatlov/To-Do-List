import { createSlice } from '@reduxjs/toolkit';

import { createNewTask, deleteTask, fetchTasks, finishTask } from './asyncActions';

import { ITaskIdOnly } from '../../@types/task.interface';
import { Status, TaskSliceState } from './types';

const initialState: TaskSliceState = {
  items: [],
  status: Status.LOADING
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
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
      state.items = state.items.filter((t) => (t.id as unknown as ITaskIdOnly) !== taskId);
      state.status = Status.SUCCESS;
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(finishTask.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(finishTask.fulfilled, (state, { payload }) => {
      state.items[state.items.findIndex((t) => t.id === payload.id)] = payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(finishTask.rejected, (state) => {
      state.status = Status.ERROR;
    });
  }
});

const { reducer: tasksReducer } = tasksSlice;

export default tasksReducer;
