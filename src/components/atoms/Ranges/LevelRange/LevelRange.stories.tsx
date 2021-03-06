import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { IAttributes } from 'types/interfaces';
import LevelRange from './LevelRange';

export default {
  title: 'atoms/Ranges/LevelRange',
  component: LevelRange,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as Meta;

export const RangeWithLevel = (props: IAttributes<HTMLInputElement>): JSX.Element => (
  <LevelRange {...props} />
);
