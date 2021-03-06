import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Header from './Header';

export default {
  title: 'atoms/header',
  component: Header,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<React.HTMLAttributes<HTMLDivElement>> = (
  props: React.HTMLAttributes<HTMLDivElement>
): JSX.Element => <Header {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Join our IT platform to share ideas, exchange knowledge and build a team!',
  className: 'headerTestClass',
};
