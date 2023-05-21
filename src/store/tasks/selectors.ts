import { RootState } from '../createStore';

export const getTasks = () => (state: RootState) => state.tasks.items;
export const getTasksLoadingStatus = () => (state: RootState) => state.tasks.status;
