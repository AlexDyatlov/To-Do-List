import { useState, useEffect } from 'react';

import Status from '../../common/status/status';
import Button from '../../common/button/button';
import SvgIcon from '../../common/svgIcon/svgIcon';
import CheckBoxField from '../../common/form/checkBoxField/checkBoxField';

import { ITask } from '../../../@types/task.interface';

import taskService from '../../../services/task.service';

const TableBody: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const content = await taskService.get();

      setTasks(content);
    };

    fetchData();
  }, []);

  return (
    <ul className="border-x border-b border-gray-300 rounded-b-xl bg-white">
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
                {task.created_at}
              </div>
              <div className="p-5 flex justify-center self-stretch items-center grow">
                <Button
                  className="flex items-center justify-center w-7 h-7 border border-gray-800 rounded text-gray-500 hover:text-red-600 hover:border-red-600 transition-colors"
                  tag="button"
                  type="button"
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
