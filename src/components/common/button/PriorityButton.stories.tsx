import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './button';
import Status from '../status/status';
import { TaskStatus } from '../../../@types/taskStatus';

const meta: Meta<ButtonProps> = {
  title: 'Компоненты/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonProps & { status: TaskStatus }>;

export const PriorityHigh: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка выбора приоритета в sidebar, содержащая компонент Status внутри.'
      }
    }
  },
  args: {
    className: 'w-full',
    tag: 'button',
    type: 'button',
    status: 'mid'
  },
  argTypes: {
    status: {
      control: {
        type: 'radio'
      },
      options: ['high', 'mid', 'low']
    }
  },
  render: (args) => {
    return (
      <Button {...args}>
        <Status className={args.className} status={args.status} />
      </Button>
    );
  }
};

export const PriorityHighActive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка выбора приоритета в sidebar, активная'
      }
    }
  },
  args: {
    ...PriorityHigh.args
  },
  render: (args) => {
    return (
      <Button className={args.className} tag={args.tag}>
        <Status className="w-full shadow-sm shadow-current" status={args.status} />
      </Button>
    );
  }
};
