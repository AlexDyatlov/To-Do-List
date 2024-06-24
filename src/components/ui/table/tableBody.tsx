import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import Title from '../../common/title/title';
import TableItems from './tableItems';

import { filtersSliceState } from '../../../store/filters/types';
import { IFiltersParams } from '../../../@types/filtersParams.interface';

import { useAppDispatch } from '../../../store/createStore';
import { getTaskCompleted, getTaskStatus } from '../../../store/filters/selectors';
import { setFilters } from '../../../store/filters/reducer';

import { taskAPI } from '../../../services/task.service';

const TableBody: React.FC = () => {
  const [filtersT, setFiltersT] = useState<IFiltersParams>({});
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const taskStatus = useSelector(getTaskStatus());
  const taskCompleted = useSelector(getTaskCompleted());

  const { data: tasks, isLoading, error } = taskAPI.useFetchTasksAllQuery(filtersT);

  const getTasksFromUrlParams = () => {
    setFiltersT({
      taskStatus,
      taskCompleted
    });
  };

  // Если изменили параметры и был первый рендер
  useEffect(() => {
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
  }, [taskStatus, taskCompleted]);

  useEffect(() => {
    getTasksFromUrlParams();
  }, [taskStatus, taskCompleted]);

  // Парсим параметры при первом рендере
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as filtersSliceState;
      dispatch(setFilters(params));
    }
    isMounted.current = true;
  }, []);

  return error ? (
    <Title className="mt-5 text-xl font-semibold text-red-600" tag="h3">
      Произошла ошибка
    </Title>
  ) : isLoading ? (
    <Title className="mt-5 text-xl font-semibold text-[#363853]" tag="h3">
      Загрузка...
    </Title>
  ) : tasks?.length ? (
    <TableItems items={tasks} />
  ) : (
    <Title className="mt-5 text-xl font-semibold text-[#363853]" tag="h3">
      Задачи не найдены, имзените параметры фильтрации
    </Title>
  );
};

export default TableBody;
