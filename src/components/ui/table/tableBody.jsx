import Status from '../../common/status/status';
import Button from '../../common/button/button';
import SvgIcon from '../../common/svgIcon/svgIcon';
import CheckBoxField from '../../common/form/checkBoxField/checkBoxField';

const TableBody = () => {
  return (
    <ul className="border-x border-b border-gray-300 rounded-b-xl bg-white">
      <li className="border-b border-gray-300 last:border-b-0">
        <div className="flex items-center">
          <div className="p-5 max-w-[120px] w-full flex justify-center self-stretch items-center border-r border-gray-300">
            <CheckBoxField />
          </div>
          <div className="p-5 max-w-[400px] w-full flex self-stretch items-center border-r border-gray-300 font-robo">
            Создание прототипа дзиайна для to-do list
          </div>
          <div className="p-5 max-w-[170px] w-full flex justify-center self-stretch items-center border-r border-gray-300">
            <Status status="high" />
          </div>
          <div className="p-5 max-w-[180px] w-full flex justify-center self-stretch items-center border-r border-gray-300">
            19 апреля 2023
          </div>
          <div className="p-5 flex justify-center self-stretch items-center grow">
            <Button
              className="flex items-center justify-center w-7 h-7 border border-gray-800 rounded text-gray-500 hover:text-red-600 hover:border-red-600 transition-colors"
              tag="btn"
              type="button"
            >
              <SvgIcon name="bin" size="16" className="" />
            </Button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default TableBody;
