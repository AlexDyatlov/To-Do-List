import Title from './components/common/title/title';
import Main from './layouts/main/main';

const App: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1170px] px-10 py-8 xl:px-6 md:px-[15px]">
      <Title className="mb-5 text-2xl font-bold text-[#363853]" tag="h1">
        Список задач
      </Title>
      <Main />
    </div>
  );
};

export default App;
