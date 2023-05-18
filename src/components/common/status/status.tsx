interface StatusProps {
  className?: string;
  status: string;
}

const getContent = (className = '', status: string): JSX.Element => {
  let value;

  switch (status) {
  case 'high':
    value = <span className={className + 'inline-block whitespace-nowrap rounded-xl p-2 px-4 w-fit bg-[#efd6d5] text-[#840500] font-robo'}>Высокий🔥</span>;
    break;
  case 'mid':
    value = <span className={className + 'inline-block whitespace-nowrap rounded-xl p-2 px-4 w-fit bg-[#faedcd] text-yellow-800 font-robo'}>Средний👨‍💻</span>;
    break;
  case 'low':
    value = <span className={className + 'inline-block whitespace-nowrap rounded-xl p-2 px-4 w-fit bg-[#e6eed5] text-green-800 font-robo'}>Низкий💤</span>;
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
