interface StatusProps {
  className?: string;
  status: string;
}

const getContent = (className = '', status: string): JSX.Element => {
  let value;

  switch (status) {
    case 'high':
      value = (
        <span
          className={
            className +
            'inline-block w-fit whitespace-nowrap rounded-xl bg-[#efd6d5] p-2 px-4 font-robo text-[#840500]'
          }
        >
          Высокий🔥
        </span>
      );
      break;
    case 'mid':
      value = (
        <span
          className={
            className +
            'inline-block w-fit whitespace-nowrap rounded-xl bg-[#faedcd] p-2 px-4 font-robo text-yellow-800'
          }
        >
          Средний👨‍💻
        </span>
      );
      break;
    case 'low':
      value = (
        <span
          className={
            className +
            'inline-block w-fit whitespace-nowrap rounded-xl bg-[#e6eed5] p-2 px-4 font-robo text-green-800'
          }
        >
          Низкий💤
        </span>
      );
      break;
    default:
      value = <></>;
  }
  return value;
};

const Status: React.FC<StatusProps> = ({ className, status }) => {
  const content = getContent(className, status);

  return content;
};

export default Status;
