import { useState } from 'react';

import Status from '../../common/status/status';
import Button from '../../common/button/button';
import SvgIcon from '../../common/svgIcon/svgIcon';
import CheckBoxField from '../../common/form/checkBoxField/checkBoxField';

import { displayDate } from '../../../utils/displayDate';

import { useAppDispatch } from '../../../store/createStore';
import { deleteTask, finishTask } from '../../../store/tasks/asyncActions';

import { ITask, ITaskIdOnly } from '../../../@types/task.interface';

interface TableRowProps {
  task: ITask;
}

const TableRow: React.FC<TableRowProps> = ({ task }) => {
  const [data, setData] = useState({ completed: false });
  const dispatch = useAppDispatch();

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

  return (
    <div className="flex items-center border-b border-gray-300 group-last:border-b-0">
      <div className="flex w-full max-w-[120px] items-center justify-center self-stretch border-r border-gray-300 p-5 lg:shrink-0">
        <CheckBoxField
          name={task.name}
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
          <SvgIcon name="bin" size="16" />
        </Button>
      </div>
    </div>
  );
};

export default TableRow;
