import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = () => {
  return (
    <div className="lg:overflow-x-auto">
      <TableHeader />
      <TableBody />
    </div>
  );
};

export default Table;
