import Button from '../../common/button/button';
import CheckBoxField from '../../common/form/checkBoxField/checkBoxField';
import Status from '../../common/status/status';
import SvgIcon from '../../common/svgIcon/svgIcon';

import { displayDate } from '../../../utils/displayDate';

import { ITask } from '../../../@types/task.interface';

interface TableItemProps {
  task: ITask;
  onFinishTask: () => void;
  onRemoveTask: () => void;
}

const TableItem: React.FC<TableItemProps> = ({ task, onFinishTask, onRemoveTask }) => {
  return (
    <li className="border-b border-gray-300 last:border-b-0" key={task.id}>
      <div className="flex items-center">
        <div className="flex w-full max-w-[120px] items-center justify-center self-stretch border-r border-gray-300 p-5 lg:shrink-0">
          <CheckBoxField name="completed" value={task.completed} onChange={onFinishTask} />
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
            onClick={onRemoveTask}
            aria-label="Удалить задачу"
          >
            <SvgIcon name="bin" size="16" className="" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TableItem;
