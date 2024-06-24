import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filtersReducer from './filters/reducer';
import { taskAPI } from '../services/task.service';

const rootReducer = combineReducers({
  filters: filtersReducer,
  [taskAPI.reducerPath]: taskAPI.reducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskAPI.middleware)
  });
}

export type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = ReturnType<typeof createStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
