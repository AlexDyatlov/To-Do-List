import ListButtons from '../listButtons/listButtons';
import AddTaskForm from '../addTaskForm/addTaskForm';

const Panel: React.FC = () => {
  return (
    <div className="border-y border-gray-300 flex items-center gap-3 mb-5">
      <ListButtons />
      <AddTaskForm />
    </div>
  );
};

export default Panel;
