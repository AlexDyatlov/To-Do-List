import { RootState } from '../createStore';

export const getTaskStatus = () => (state: RootState) => state.filters.taskStatus;
export const getTaskCompleted = () => (state: RootState) => state.filters.taskCompleted;
