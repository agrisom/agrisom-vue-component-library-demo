import type { Meta, StoryObj } from '@storybook/vue3';

import BasicComponent from './BasicComponent.vue';

const meta = {
  title: 'Components/BasicComponent',
  component: BasicComponent,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Content text of &lt;h1&gt; title',
    },
    color: {
      description: 'Color for the content text',
      table: {
        type: {
          summary: 'ColorType',
          detail: '"green" | "red" | undefined',
        },
      },
      control: 'select',
      options: ['green', 'red', undefined],
    },
  },
  args: { text: '' }, // default value
} satisfies Meta<typeof BasicComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Edit this text from storybook',
  },
};

export const ColorGreen: Story = {
  args: {
    text: 'Edit this text from storybook',
    color: 'green',
  },
};

export const ColorRed: Story = {
  args: {
    text: 'Edit this text from storybook',
    color: 'red',
  },
};