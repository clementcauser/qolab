import { Story, Meta } from '@storybook/react';
import { TextProps, Text } from './text';

export default {
  component: Text,
  title: 'Text',
} as Meta;

const BasicTemplate: Story<TextProps> = (args) => (
  <Text {...args}>Almost before we knew it, we had left the ground.</Text>
);

const SizesTemplate: Story<TextProps> = () => (
  <>
    <Text size="h1">Almost before we knew it, we had left the ground.</Text>
    <Text size="h2">Almost before we knew it, we had left the ground.</Text>
    <Text size="h3">Almost before we knew it, we had left the ground.</Text>
    <Text size="h4">Almost before we knew it, we had left the ground.</Text>
    <Text size="h5">Almost before we knew it, we had left the ground.</Text>
    <Text size="h6">Almost before we knew it, we had left the ground.</Text>
    <Text size="p">Almost before we knew it, we had left the ground.</Text>
  </>
);

const StatusTemplate: Story<TextProps> = () => (
  <>
    <Text>Almost before we knew it, we had left the ground.</Text>
    <Text status="primary">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text status="secondary">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text status="info">Almost before we knew it, we had left the ground.</Text>
    <Text status="success">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text status="warning">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text status="danger">
      Almost before we knew it, we had left the ground.
    </Text>
  </>
);

export const Basic = BasicTemplate.bind({});
export const Sizes = SizesTemplate.bind({});
export const Status = StatusTemplate.bind({});
