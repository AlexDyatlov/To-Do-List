import { useSelector } from 'react-redux';
import clsx from 'clsx';

import Button from '../../common/button/button';
import Status from '../../common/status/status';
import Title from '../../common/title/title';

import { useAppDispatch } from '../../../store/createStore';
import { getTaskStatus } from '../../../store/filters/selectors';
import { setTaskStatus } from '../../../store/filters/reducer';
import { TaskStatus } from '../../../@types/taskStatus';

const Sidebar: React.FC = () => {
  const priorities: TaskStatus[] = ['high', 'mid', 'low'];
  const dispatch = useAppDispatch();
  const taskStatus = useSelector(getTaskStatus());

  const onChangeStatus = (status: string) => {
    dispatch(setTaskStatus(status));
  };

  return (
    <div className="self-start rounded-xl border border-[#ECECEC] bg-white p-5">
      <Title className="mb-5 text-xl font-semibold text-[#363853]" tag="div">
        Приоритеты
      </Title>
      <ul className="grid gap-3">
        {priorities.map((item, index) => (
          <li key={index}>
            <Button
              className="w-full"
              type="button"
              tag="button"
              onClick={() => onChangeStatus(item)}
            >
              <Status
                className={clsx('w-full', {
                  'shadow-sm shadow-current': taskStatus === item
                })}
                status={item}
              />
            </Button>
          </li>
        ))}
        <li>
          <Button
            className="mt-2 w-full p-2 underline hover:text-pink-700"
            type="button"
            tag="button"
            onClick={() => onChangeStatus('')}
          >
            Сбросить
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
