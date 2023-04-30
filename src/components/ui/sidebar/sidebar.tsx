import { useSelector } from 'react-redux';

import Button from '../../common/button/button';
import Status from '../../common/status/status';
import Title from '../../common/title/title';

import { useAppDispatch } from '../../../store/createStore';
import { getTaskStatus } from '../../../store/filters/selectors';
import { setTaskStatus } from '../../../store/filters/reducer';

const Sidebar: React.FC = () => {
  const priorities: string[] = ['high', 'mid', 'low'];
  const dispatch = useAppDispatch();
  const taskStatus = useSelector(getTaskStatus());

  const onChangeStatus = (status: string) => {
    dispatch(setTaskStatus(status));
  };

  return (
    <div className="self-start bg-white border border-[#ECECEC] rounded-xl p-5">
      <Title className="text-xl font-semibold text-[#363853] mb-5" tag="div">
        Приоритеты
      </Title>
      <ul className="grid gap-3">
        {
          priorities.map((item, index) => (
            <li key={index}>
              <Button className="w-full" type="button" tag="button" onClick={() => onChangeStatus(item)}>
                <Status className={'w-full ' + (taskStatus === item ? 'shadow-sm shadow-current ' : '') } status={item} />
              </Button>
            </li>
          ))
        }
        <li>
          <Button className="w-full underline mt-2 p-2 hover:text-pink-700" type="button" tag="button" onClick={() => onChangeStatus('')}>
            Сбросить
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
