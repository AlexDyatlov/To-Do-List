import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import tasksReducer from './tasks/reducer';
import filtersReducer from './filters/reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}

export type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = ReturnType<typeof createStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
