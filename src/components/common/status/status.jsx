const getContent = (className = '', status) => {
  let value;

  switch (status) {
  case 'high':
    value = <span className={className + 'inline-block rounded-xl p-2 px-4 w-fit bg-[#efd6d5] text-[#840500] font-robo'}>Высокий🔥</span>;
    break;
  case 'mid':
    value = <span className={className + 'inline-block rounded-xl p-2 px-4 w-fit bg-[#faedcd] text-yellow-800 font-robo'}>Средний👨‍💻</span>;
    break;
  case 'low':
    value = <span className={className + 'inline-block rounded-xl p-2 px-4 w-fit bg-[#e6eed5] text-green-800 font-robo'}>Низкий💤</span>;
    break;
  }
  return value;
};

const Status = ({ className, status }) => {
  const content = getContent(className, status);

  return content;
};

export default Status;
