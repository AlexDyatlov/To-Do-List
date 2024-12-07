import clsx from 'clsx';

import { TaskStatus } from '../../../@types/taskStatus';

interface StatusProps {
  className?: string;
  status: TaskStatus;
}

const statusClasses = {
  high: 'inline-block w-fit whitespace-nowrap rounded-xl bg-[#efd6d5] p-2 px-4 font-robo text-[#840500]',
  mid: 'inline-block w-fit whitespace-nowrap rounded-xl bg-[#faedcd] p-2 px-4 font-robo text-yellow-800',
  low: 'inline-block w-fit whitespace-nowrap rounded-xl bg-[#e6eed5] p-2 px-4 font-robo text-green-800'
};

const statusLabels = {
  high: 'Высокий🔥',
  mid: 'Средний👨‍💻',
  low: 'Низкий💤'
};

const Status: React.FC<StatusProps> = ({ className, status }) => {
  return <span className={clsx(statusClasses[status], className)}>{statusLabels[status]}</span>;
};

export default Status;
