import ListButtons from '../listButtons/listButtons';
import AddTaskForm from '../addTaskForm/addTaskForm';

const Panel: React.FC = () => {
  return (
    <div className="mb-5 flex items-center gap-3 border-y border-gray-300 xl:flex-col xl:items-start xl:pt-1">
      <ListButtons />
      <AddTaskForm />
    </div>
  );
};

export default Panel;
