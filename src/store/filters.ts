import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from './createStore';

interface filtersSliceState {
  itemStatus: string;
  itemCompleted: null | boolean;
}

const initialState: filtersSliceState = {
  itemStatus: '',
  itemCompleted: null
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setItemStatus(state, { payload }: PayloadAction<string>) {
      state.itemStatus = payload;
    },
    setItemCompleted(state, { payload }: PayloadAction<null | boolean>) {
      state.itemCompleted = payload;
    }
  }
});

const { reducer: filtersReducer, actions } = filtersSlice;
export const { setItemStatus, setItemCompleted } = actions;

export const getItemStatus = () => (state: RootState) => state.filters.itemStatus;
export const getItemCompleted = () => (state: RootState) => state.filters.itemCompleted;

export default filtersReducer;
