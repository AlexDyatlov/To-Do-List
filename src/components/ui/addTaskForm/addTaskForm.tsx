import { useState } from 'react';

import Button from '../../common/button/button';
import CustomSelect from '../../common/customSelect/customSelect';
import TextField from '../../common/form/textField/textField';

import { ITask } from '../../../@types/task.interface';

import { generateId } from '../../../utils/generateId';

import { taskAPI } from '../../../services/task.service';

const myObj: ITask = {
  id: generateId(),
  completed: false,
  name: '',
  status: 'low',
  created_at: String(Date.now())
};

const AddTaskForm: React.FC = () => {
  const [data, setData] = useState<ITask>(myObj);
  const [createTask] = taskAPI.useCreateTaskMutation();

  const options = [
    { value: 'high', label: 'Высокий' },
    { value: 'mid', label: 'Средний' },
    { value: 'low', label: 'Низкий' }
  ];

  const handleChange = (target: { name: string; value: string }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleChangeStatus = (value: string) => {
    setData((prevState) => ({
      ...prevState,
      status: value
    }));
  };

  const isValid = data.name.trim().length !== 0;
  const clearForm = () => {
    setData(myObj);
  };

  const handlerAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    const payload: ITask = {
      ...data,
      id: generateId(),
      created_at: String(Date.now())
    };

    await createTask(payload);
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
        className={
          'rounded-md px-4 py-3 text-lg font-medium text-blue-600 md:w-full md:py-2' +
          (!isValid ? ' cursor-not-allowed bg-[#f0f0f0] !text-[#9d9a9a]' : '')
        }
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
