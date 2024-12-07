import { Meta, StoryObj } from '@storybook/react';
import TextField from './textField';

const meta: Meta<typeof TextField> = {
  title: 'Компоненты/TextField',
  component: TextField,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input по умолчанию'
      }
    }
  },
  args: {
    type: 'text',
    name: 'input',
    placeholder: 'Введите текст',
    value: ''
  }
};

export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Input + label'
      }
    }
  },
  args: {
    type: 'text',
    name: 'input',
    placeholder: 'Введите текст',
    value: '',
    label: 'Текст в label'
  }
};
