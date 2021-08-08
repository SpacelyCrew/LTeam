import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { IconButton } from '../IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta;

const Template: Story = (args) => <IconButton {...args} />;
