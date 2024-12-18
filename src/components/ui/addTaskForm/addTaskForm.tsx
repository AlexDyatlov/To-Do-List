import { useState } from 'react';

import Button from '../../common/button/button';
import CustomSelect from '../../common/customSelect/customSelect';
import TextField from '../../common/form/textField/textField';

import { ITask } from '../../../@types/task.interface';
import { TaskStatus } from '../../../@types/taskStatus';

import { generateId } from '../../../utils/generateId';

import { useAppDispatch } from '../../../store/createStore';
import { createNewTask } from '../../../store/tasks/asyncActions';

const myObj: ITask = {
  id: generateId(),
  completed: false,
  name: '',
  status: 'low',
  created_at: String(Date.now())
};

const AddTaskForm: React.FC = () => {
  const [data, setData] = useState<ITask>(myObj);

  const options = [
    { value: 'high', label: 'Высокий' },
    { value: 'mid', label: 'Средний' },
    { value: 'low', label: 'Низкий' }
  ];

  const dispatch = useAppDispatch();

  const handleChange = (target: { name: string; value: string }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleChangeStatus = (value: string) => {
    setData((prevState) => ({
      ...prevState,
      status: value as TaskStatus
    }));
  };

  const isValid = data.name.trim().length !== 0;
  const clearForm = () => {
    setData(myObj);
  };

  const handlerAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    const payload: ITask = {
      ...data,
      id: generateId(),
      created_at: String(Date.now())
    };

    dispatch(createNewTask(payload));
    clearForm();
  };

  return (
    <form className="flex w-full items-center gap-3 md:flex-col" onSubmit={handlerAddTask}>
      <CustomSelect
        className="w-full max-w-[130px] md:max-w-full"
        options={options}
        defaultLabel={data.status}
        onChange={handleChangeStatus}
      />
      <TextField
        type="text"
        name="name"
        value={data.name || ''}
        placeholder="Новая задача"
        onChange={handleChange}
      />
      <Button
        className="rounded-md px-4 py-3 text-lg font-medium text-blue-600 md:w-full md:py-2"
        tag="button"
        type="submit"
        disabled={!isValid}
      >
        Добавить
      </Button>
    </form>
  );
};

export default AddTaskForm;
