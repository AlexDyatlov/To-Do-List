const TableHeader: React.FC = () => {
  return (
    <ul className="flex items-stretch rounded-t-xl border border-gray-300 bg-[#f7f7f7] font-robo lg:w-[768px]">
      <li className="flex w-full max-w-[120px] items-center border-r border-gray-300 px-5 py-4 text-base lg:shrink-0">
        <span className="inline-block">Выполнена</span>
      </li>
      <li className="flex w-full max-w-[400px] items-center border-r border-gray-300 px-5 py-4 text-base lg:max-w-[230px] lg:shrink-0">
        <span className="inline-block">Название задачи</span>
      </li>
      <li className="flex w-full max-w-[170px] items-center justify-center border-r border-gray-300 px-5 py-4 text-center text-base lg:shrink-0">
        <span className="inline-block">Статус</span>
      </li>
      <li className="flex w-full max-w-[180px] items-center justify-center border-r border-gray-300 px-5 py-4 text-center text-base lg:shrink-0">
        <span className="inline-block">Дата создания</span>
      </li>
      <li className="flex min-w-[68px] items-center px-5 py-4 lg:max-w-[68px]"></li>
    </ul>
  );
};

export default TableHeader;
