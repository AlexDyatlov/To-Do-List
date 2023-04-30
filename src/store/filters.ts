import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from './createStore';

export interface filtersSliceState {
  taskStatus: string;
  taskCompleted: string;
}

const initialState: filtersSliceState = {
  taskStatus: '',
  taskCompleted: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTaskStatus(state, { payload }: PayloadAction<string>) {
      state.taskStatus = payload;
    },
    setTaskCompleted(state, { payload }: PayloadAction<string>) {
      state.taskCompleted = payload;
    },
    setFilters(state, { payload }: PayloadAction<filtersSliceState>) {
      state.taskStatus = payload?.taskStatus || '';
      state.taskCompleted = payload?.taskCompleted || '';
    }
  }
});

const { reducer: filtersReducer, actions } = filtersSlice;
export const { setTaskStatus, setTaskCompleted, setFilters } = actions;

export const getTaskStatus = () => (state: RootState) => state.filters.taskStatus;
export const getTaskCompleted = () => (state: RootState) => state.filters.taskCompleted;

export default filtersReducer;
