import Title from './components/common/title/title';
import Main from './layouts/main/main';

const App: React.FC = () => {
  return (
    <div className="max-w-[1170px] mx-auto py-8 px-10">
      <Title className="text-2xl font-bold text-[#363853] mb-5" tag="h1">Список задач</Title>
      <Main/>
    </div>
  );
};

export default App;
