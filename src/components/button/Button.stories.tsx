import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    viewMode: 'canvas',
    docs: {
      description: {
        component:
          'A versatile button component built using Tailwind CSS and CVA. Supports multiple variants, sizes, loading state, and accessibility best practices.',
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    variant: {
      description: 'Visual style of the button.',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Size of the button.',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      description: 'Disables the button.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    isLoading: {
      description: 'Shows loading spinner and disables interaction.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      description: 'Callback fired when button is clicked.',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Playground: Story = {};
