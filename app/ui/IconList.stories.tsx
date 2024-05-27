import IconList from './IconList';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';


const meta = {
  title: 'Ui/IconList',
  component: IconList
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  
} satisfies Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
