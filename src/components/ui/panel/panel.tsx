import Button from '../../common/button/button';
import CustomSelect from '../../common/customSelect/customSelect';
import TextField from '../../common/form/textField/textField';

const Panel: React.FC = () => {
  const options = [
    { value: 'high', label: 'Высокий' },
    { value: 'mid', label: 'Средний' },
    { value: 'low', label: 'Низкий' }
  ];

  return (
    <div className="border-y border-gray-300 flex items-center gap-3 mb-5">
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
      <CustomSelect
        className="max-w-[130px] w-full"
        options={options}
        defaultLabel="Высокий"
      />
      <TextField type='text' name="task" value="" placeholder="Новая задача" onChange={() => 'str'} />
      <Button
        className="text-blue-600 font-medium py-3 px-4 text-lg"
        tag="button"
        type="button"
      >
        Добавить
      </Button>
    </div>
  );
};

export default Panel;
