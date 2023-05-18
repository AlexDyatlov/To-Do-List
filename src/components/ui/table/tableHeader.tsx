const TableHeader: React.FC = () => {
  return (
    <ul className="flex items-stretch border border-gray-300 rounded-t-xl bg-[#f7f7f7] font-robo lg:w-[768px]">
      <li className="flex items-center px-5 py-4 text-base max-w-[120px] w-full border-r border-gray-300 lg:shrink-0">
        <span className="inline-block">
          Выполнена
        </span>
      </li>
      <li className="flex items-center px-5 py-4 text-base max-w-[400px] w-full border-r border-gray-300 lg:max-w-[230px] lg:shrink-0">
        <span className="inline-block">
          Название задачи
        </span>
      </li>
      <li className="flex items-center px-5 py-4 text-base max-w-[170px] w-full text-center justify-center border-r border-gray-300 lg:shrink-0">
        <span className="inline-block">
          Статус
        </span>
      </li>
      <li className="flex items-center px-5 py-4 text-base max-w-[180px] w-full text-center justify-center border-r border-gray-300 lg:shrink-0">
        <span className="inline-block">
          Дата создания
        </span>
      </li>
      <li className="flex items-center px-5 py-4 min-w-[68px] lg:max-w-[68px]"></li>
    </ul>
  );
};

export default TableHeader;
