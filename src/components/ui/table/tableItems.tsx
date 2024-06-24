import { ITask, ITaskIdOnly } from '../../../@types/task.interface';

import { taskAPI } from '../../../services/task.service';

import TableItem from './tableItem';

interface TableItemsProps {
  items: ITask[];
}

const TableItems: React.FC<TableItemsProps> = ({ items }) => {
  const [removeTask] = taskAPI.useRemoveTaskMutation();
  const [completeTask] = taskAPI.useCompleteTaskMutation();

  const handlerFinishTask = (id: number, completed: boolean) => {
    completeTask({ id, completed: !completed });
  };

  return (
    <ul className="rounded-b-xl border-x border-b border-gray-300 bg-white lg:w-[768px]">
      {items?.map((task) => (
        <TableItem
          task={task}
          key={task.id}
          onFinishTask={() => handlerFinishTask(task.id, task.completed)}
          onRemoveTask={() => removeTask(task.id as unknown as ITaskIdOnly)}
        />
      ))}
    </ul>
  );
};

export default TableItems;
