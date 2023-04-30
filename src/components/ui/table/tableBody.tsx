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

  const getTasksFromUrlParams = () => {
    const urlStatus = taskStatus ? `status=${taskStatus}` : '';
    const urlCompleted = taskCompleted ? `&completed=${taskCompleted}` : '';

    dispatch(fetchTasks({
      urlStatus,
      urlCompleted
    }));
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

  const handlerFinishTask = (task: ITask) => {
    setData((prevState) => ({
      ...prevState,
      ...task,
      completed: !prevState.completed
    }));

    dispatch(finishTask({
      ...data,
      ...task,
      completed: !task.completed
    }));
  };

  return (
    status === 'error'
      ? <Title className='text-xl font-semibold text-red-600 mt-5' tag='h3'>Произошла ошибка</Title>
      : status === 'loading'
        ? <Title className='text-xl font-semibold text-[#363853] mt-5' tag='h3'>Загрузка...</Title>
        : tasks.length
          ? <ul className="border-x border-b border-gray-300 rounded-b-xl bg-white">
            {
              tasks.map(task => (
                <li className="border-b border-gray-300 last:border-b-0" key={task.id}>
                  <div className="flex items-center">
                    <div className="p-5 max-w-[120px] w-full flex justify-center self-stretch items-center border-r border-gray-300">
                      <CheckBoxField name='completed' value={task.completed} onChange={() => handlerFinishTask(task)} />
                    </div>
                    <div className="p-5 max-w-[400px] w-full flex self-stretch items-center border-r border-gray-300 font-robo">
                      {task.name}
                    </div>
                    <div className="p-5 max-w-[170px] w-full flex justify-center self-stretch items-center border-r border-gray-300">
                      <Status status={task.status} />
                    </div>
                    <div className="p-5 max-w-[180px] w-full flex justify-center self-stretch items-center border-r border-gray-300">
                      {displayDate(task.created_at)}
                    </div>
                    <div className="p-5 flex justify-center self-stretch items-center grow">
                      <Button
                        className="flex items-center justify-center w-7 h-7 border border-gray-800 rounded text-gray-500 hover:text-red-600 hover:border-red-600 transition-colors"
                        tag="button"
                        type="button"
                        onClick={() => dispatch(deleteTask(task.id as unknown as ITaskIdOnly))}
                      >
                        <SvgIcon name="bin" size="16" className="" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          : <Title className='text-xl font-semibold text-[#363853] mt-5' tag='h3'>
            Задачи не найдены, имзените параметры фильтрации
          </Title>
  );
};

export default TableBody;
