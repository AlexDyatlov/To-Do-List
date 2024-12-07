import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import Title from '../../common/title/title';
import TableRow from './TableRow';

import { filtersSliceState } from '../../../store/filters/types';

import { useAppDispatch } from '../../../store/createStore';
import { getTasks, getTasksLoadingStatus } from '../../../store/tasks/selectors';
import { getTaskCompleted, getTaskStatus } from '../../../store/filters/selectors';
import { fetchTasks } from '../../../store/tasks/asyncActions';
import { setFilters } from '../../../store/filters/reducer';

const TableBody: React.FC = () => {
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const tasks = useSelector(getTasks());
  const status = useSelector(getTasksLoadingStatus());
  const taskStatus = useSelector(getTaskStatus());
  const taskCompleted = useSelector(getTaskCompleted());

  // Если изменили параметры и был первый рендер
  useEffect(() => {
    const getTasksFromUrlParams = () => {
      const urlStatus = taskStatus ? `status=${taskStatus}` : '';
      const urlCompleted = taskCompleted ? `&completed=${taskCompleted}` : '';

      dispatch(
        fetchTasks({
          urlStatus,
          urlCompleted
        })
      );
    };

    if (isMounted.current) {
      const params = {
        taskStatus: taskStatus !== '' ? taskStatus : null,
        taskCompleted: taskCompleted !== '' ? taskCompleted : null
      };
      const queryString = qs.stringify(params, { skipNulls: true });

      navigate(`/?${queryString}`);
    }

    if (!window.location.search) {
      getTasksFromUrlParams();
    }

    getTasksFromUrlParams();
  }, [taskStatus, taskCompleted, dispatch, navigate]);

  // Парсим параметры при первом рендере
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as filtersSliceState;
      dispatch(setFilters(params));
    }
    isMounted.current = true;
  }, [dispatch]);

  return status === 'error' ? (
    <Title className="mt-5 text-xl font-semibold text-red-600" tag="h3">
      Произошла ошибка
    </Title>
  ) : status === 'loading' ? (
    <Title className="mt-5 text-xl font-semibold text-[#363853]" tag="h3">
      Загрузка...
    </Title>
  ) : tasks.length ? (
    <ul className="rounded-b-xl border-x border-b border-gray-300 bg-white lg:w-[768px]">
      {tasks.map((task) => (
        <li className="group" key={task.id}>
          <TableRow task={task} />
        </li>
      ))}
    </ul>
  ) : (
    <Title className="mt-5 text-xl font-semibold text-[#363853]" tag="h3">
      Задачи не найдены, имзените параметры фильтрации
    </Title>
  );
};

export default TableBody;
