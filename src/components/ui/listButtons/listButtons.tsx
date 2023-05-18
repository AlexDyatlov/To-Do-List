import { useSelector } from 'react-redux';

import { ICompletedTasks } from '../../../@types/completedTasks.interface';

import Button from '../../common/button/button';

import { useAppDispatch } from '../../../store/createStore';
import { getTaskCompleted } from '../../../store/filters/selectors';
import { setTaskCompleted } from '../../../store/filters/reducer';

const ListButtons: React.FC = () => {
  const btnsContent: ICompletedTasks[] = [
    { name: 'Все', completed: '' },
    { name: 'Активные', completed: false },
    { name: 'Выполненные', completed: true }];
  const dispatch = useAppDispatch();
  const taskCompleted = useSelector(getTaskCompleted());

  const onChangeItem = (value: string) => {
    dispatch(setTaskCompleted(value));
  };

  return (
    <ul className="w-max flex items-center relative after:absolute after:right-0 after:w-px after:h-6 after:-translate-y-1/2 after:top-2/4 after:bg-gray-300 xl:order-1 xl:after:content-none md:w-full md:overflow-x-auto md:snap-x">
      {
        btnsContent.map((item, index) => (
          <li className="md:snap-start" key={index}>
            <Button
              className={'text-gray-600 font-medium p-4 text-lg hover:text-slate-900 border-b-2 border-transparent' +
                (taskCompleted === String(item.completed) ? ' !border-blue-500 text-slate-900' : '')
              }
              tag="button"
              type="button"
              onClick={() => onChangeItem(String(item.completed))}
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
