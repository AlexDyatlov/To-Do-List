import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Компоненты/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    tag: 'button',
    children: 'Кнопка',
    className: 'rounded-md px-4 py-3 text-lg font-medium text-blue-600 md:w-full md:py-2',
    type: 'button',
    disabled: false
  }
};

export const Ghost: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка с прозрачным фоном в списке'
      }
    }
  },
  args: {
    tag: 'button',
    children: 'Кнопка',
    className:
      'border-b-2 border-transparent p-4 text-lg font-medium text-gray-600 hover:text-slate-900',
    type: 'button'
  }
};

export const GhostActive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка с прозрачным фоном в списке - активная'
      }
    }
  },
  args: {
    tag: 'button',
    children: 'Кнопка',
    className:
      'border-b-2 border-transparent p-4 text-lg font-medium text-gray-600 hover:text-slate-900 !border-blue-500 text-slate-900',
    type: 'button'
  }
};

export const Reset: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка в sidebar'
      }
    }
  },
  args: {
    tag: 'button',
    children: 'Кнопка',
    className: 'mt-2 w-full p-2 underline hover:text-pink-700',
    type: 'button'
  }
};
