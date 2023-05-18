import Panel from '../../ui/panel/panel';
import Sidebar from '../../ui/sidebar/sidebar';
import Table from '../../ui/table';

const MainPage: React.FC = () => {
  return (
    <>
      <Panel />
      <div className='grid grid-cols-[200px_1fr] gap-8 xl:grid-cols-1'>
        <Sidebar />
        <Table/>
      </div>
    </>
  );
};

export default MainPage;
