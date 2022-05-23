import { Story, Meta } from '@storybook/react';
import { TextProps, Text } from './text';

export default {
  component: Text,
  title: 'Text',
} as Meta;

const BasicTemplate: Story<TextProps> = (args) => (
  <Text {...args}>Almost before we knew it, we had left the ground.</Text>
);

const VariantsTemplate: Story<TextProps> = () => (
  <>
    <Text variant="h1">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h2">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h3">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h4">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h5">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h6">Almost before we knew it, we had left the ground.</Text>
    <Text variant="p">Almost before we knew it, we had left the ground.</Text>
    <Text variant="link">
      Almost before we knew it, we had left the ground.
    </Text>
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

const AlignTemplate: Story<TextProps> = () => (
  <>
    <Text align="left">This text is aligned left</Text>
    <Text align="center">This text is centered</Text>
    <Text align="right">This text is aligned right</Text>
  </>
);

const WeightTemplate: Story<TextProps> = () => (
  <>
    <Text weight="hairline">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text weight="thin">Almost before we knew it, we had left the ground.</Text>
    <Text weight="light">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text weight="normal">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text weight="medium">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text weight="semibold">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text weight="bold">Almost before we knew it, we had left the ground.</Text>
    <Text weight="extrabold">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text weight="black">
      Almost before we knew it, we had left the ground.
    </Text>
  </>
);

export const Basic = BasicTemplate.bind({});
export const Variants = VariantsTemplate.bind({});
export const Status = StatusTemplate.bind({});
export const Align = AlignTemplate.bind({});
export const Weight = WeightTemplate.bind({});
