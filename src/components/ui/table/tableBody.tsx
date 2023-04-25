import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Title from '../../common/title/title';
import Status from '../../common/status/status';
import Button from '../../common/button/button';
import SvgIcon from '../../common/svgIcon/svgIcon';
import CheckBoxField from '../../common/form/checkBoxField/checkBoxField';

import { displayDate } from '../../../utils/displayDate';

import { ITaskIdOnly } from '../../../@types/task.interface';

import { useAppDispatch } from '../../../store/createStore';
import { deleteTask, fetchTasks, getTasks, getTasksLoadingStatus } from '../../../store/tasks';

const TableBody: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useSelector(getTasks());
  const status = useSelector(getTasksLoadingStatus());

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    status === 'error'
      ? <Title className='text-xl font-semibold text-red-600 mt-5' tag='h3'>Произошла ошибка</Title>
      : status === 'loading'
        ? <Title className='text-xl font-semibold text-[#363853] mt-5' tag='h3'>Загрузка...</Title>
        : <ul className="border-x border-b border-gray-300 rounded-b-xl bg-white">
          {
            tasks.map(task => (
              <li className="border-b border-gray-300 last:border-b-0" key={task.id}>
                <div className="flex items-center">
                  <div className="p-5 max-w-[120px] w-full flex justify-center self-stretch items-center border-r border-gray-300">
                    <CheckBoxField name='task' value={task.completed} onChange={() => 'str'} />
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
  );
};

export default TableBody;
