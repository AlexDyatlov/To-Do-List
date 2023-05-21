import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { filtersSliceState } from './types';

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

export default filtersReducer;
