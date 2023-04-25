import Button from '../../common/button/button';

const ListButtons: React.FC = () => {
  return (
    <ul className="w-max flex items-center relative after:absolute after:right-0 after:w-px after:h-6 after:-translate-y-1/2 after:top-2/4 after:bg-gray-300">
      <li>
        <Button
          className="text-gray-600 font-medium p-4 text-lg hover:text-slate-900 text-slate-900 border-b-2 border-blue-500"
          tag="button"
          type="button"
        >
          Все
        </Button>
      </li>
      <li>
        <Button
          className="text-gray-600 font-medium p-4 text-lg hover:text-slate-900"
          tag="button"
          type="button"
        >
          Активные
        </Button>
      </li>
      <li>
        <Button
          className="text-gray-600 font-medium p-4 text-lg hover:text-slate-900"
          tag="button"
          type="button"
        >
          Выполненные
        </Button>
      </li>
    </ul>
  );
};

export default ListButtons;
