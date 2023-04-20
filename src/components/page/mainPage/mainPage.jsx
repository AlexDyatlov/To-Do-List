import Panel from '../../ui/panel/panel';
import Sidebar from '../../ui/sidebar/sidebar';
import Table from '../../ui/table';

const MainPage = () => {
  return (
    <div>
      <Panel />
      <div className='grid grid-cols-[200px_1fr] gap-8'>
        <Sidebar />
        <Table/>
      </div>
    </div>
  );
};

export default MainPage;
