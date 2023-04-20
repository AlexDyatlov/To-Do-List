const TableHeader = () => {
  return (
    <ul className="flex items-center border border-gray-300 rounded-t-xl bg-[#f7f7f7] font-robo">
      <li className="px-5 py-4 text-base max-w-[120px] w-full border-r border-gray-300">
        Выполнена
      </li>
      <li className="px-5 py-4 text-base max-w-[400px] w-full border-r border-gray-300">
        Название задачи
      </li>
      <li className="px-5 py-4 text-base max-w-[170px] w-full text-center border-r border-gray-300">
        Статус
      </li>
      <li className="px-5 py-4 text-base max-w-[180px] w-full text-center border-r border-gray-300">
        Дата создания
      </li>
      <li className="px-5 py-4 min-w-[68px]"></li>
    </ul>
  );
};

export default TableHeader;
