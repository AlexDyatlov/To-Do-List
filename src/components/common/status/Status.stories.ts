import { Meta, StoryObj } from '@storybook/react';
import Status from './status';

const meta: Meta<typeof Status> = {
  title: 'Компоненты/Status',
  component: Status,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Status>;

export const High: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Статус высокий'
      }
    }
  },
  args: {
    status: 'high'
  }
};

export const Mid: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Статус средний'
      }
    }
  },
  args: {
    status: 'mid'
  }
};

export const Low: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Статус низкий'
      }
    }
  },
  args: {
    status: 'low'
  }
};
