import { useSelector } from 'react-redux';

import { ICompletedTasks } from '../../../@types/completedTasks.interface';

import Button from '../../common/button/button';

import { useAppDispatch } from '../../../store/createStore';
import { getItemCompleted, setItemCompleted } from '../../../store/filters';

const ListButtons: React.FC = () => {
  const btnsContent: ICompletedTasks[] = [
    { name: 'Все', completed: null },
    { name: 'Активные', completed: false },
    { name: 'Выполненные', completed: true }];
  const dispatch = useAppDispatch();
  const completedTasks = useSelector(getItemCompleted());

  const onChangeItem = (value: null | boolean) => {
    dispatch(setItemCompleted(value));
  };

  return (
    <ul className="w-max flex items-center relative after:absolute after:right-0 after:w-px after:h-6 after:-translate-y-1/2 after:top-2/4 after:bg-gray-300">
      {
        btnsContent.map((item, index) => (
          <li key={index}>
            <Button
              className={'text-gray-600 font-medium p-4 text-lg hover:text-slate-900 text-slate-900 border-b-2 border-transparent' +
                (completedTasks === item.completed ? ' !border-blue-500' : '')
              }
              tag="button"
              type="button"
              onClick={() => onChangeItem(item.completed)}
            >
              {item.name}
            </Button>
          </li>
        ))
      }
    </ul>
  );
};

export default ListButtons;
