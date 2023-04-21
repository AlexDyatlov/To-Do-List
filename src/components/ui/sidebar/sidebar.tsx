import Button from '../../common/button/button';
import Status from '../../common/status/status';
import Title from '../../common/title/title';

const Sidebar: React.FC = () => {
  return (
    <div className="self-start bg-white border border-[#ECECEC] rounded-xl p-5">
      <Title className="text-xl font-semibold text-[#363853] mb-5" tag="div">
        Приоритеты
      </Title>
      <ul className="grid gap-3">
        <li>
          <Button className="w-full" type="button" tag="button">
            <Status className="w-full " status="high" />
          </Button>
        </li>
        <li>
          <Button className="w-full" type="button" tag="button">
            <Status className="w-full " status="mid" />
          </Button>
        </li>
        <li>
          <Button className="w-full" type="button" tag="button">
            <Status className="w-full " status="low" />
          </Button>
        </li>
        <li>
          <Button className="w-full underline mt-2 p-2" type="button" tag="button">
            Сбросить
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
