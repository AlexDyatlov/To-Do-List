import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import Title from '../../common/title/title';
import Status from '../../common/status/status';
import Button from '../../common/button/button';
import SvgIcon from '../../common/svgIcon/svgIcon';
import CheckBoxField from '../../common/form/checkBoxField/checkBoxField';

import { displayDate } from '../../../utils/displayDate';

import { ITask, ITaskIdOnly } from '../../../@types/task.interface';
import { filtersSliceState } from '../../../store/filters/types';

import { useAppDispatch } from '../../../store/createStore';
import { getTasks, getTasksLoadingStatus } from '../../../store/tasks/selectors';
import { getTaskCompleted, getTaskStatus } from '../../../store/filters/selectors';
import { deleteTask, fetchTasks, finishTask } from '../../../store/tasks/asyncActions';
import { setFilters } from '../../../store/filters/reducer';

const TableBody: React.FC = () => {
  const [data, setData] = useState({ completed: false });
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

  const handlerFinishTask = (task: ITask) => {
    setData((prevState) => ({
      ...prevState,
      ...task,
      completed: !prevState.completed
    }));

    dispatch(
      finishTask({
        ...data,
        ...task,
        completed: !task.completed
      })
    );
  };

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
        <li className="border-b border-gray-300 last:border-b-0" key={task.id}>
          <div className="flex items-center">
            <div className="flex w-full max-w-[120px] items-center justify-center self-stretch border-r border-gray-300 p-5 lg:shrink-0">
              <CheckBoxField
                name="completed"
                value={task.completed}
                onChange={() => handlerFinishTask(task)}
              />
            </div>
            <div className="flex w-full max-w-[400px] items-center self-stretch border-r border-gray-300 p-5 font-robo lg:max-w-[230px] lg:shrink-0">
              {task.name}
            </div>
            <div className="flex w-full max-w-[170px] items-center justify-center self-stretch border-r border-gray-300 p-5 lg:shrink-0">
              <Status status={task.status} />
            </div>
            <div className="flex w-full max-w-[180px] items-center justify-center self-stretch border-r border-gray-300 p-5 lg:shrink-0">
              {displayDate(task.created_at)}
            </div>
            <div className="flex grow items-center justify-center self-stretch p-5 lg:max-w-[68px] lg:shrink-0">
              <Button
                className="flex h-7 w-7 items-center justify-center rounded border border-gray-800 text-gray-500 transition-colors hover:border-red-600 hover:text-red-600"
                tag="button"
                type="button"
                onClick={() => dispatch(deleteTask(task.id as unknown as ITaskIdOnly))}
              >
                <SvgIcon name="bin" size="16" className="" />
              </Button>
            </div>
          </div>
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
