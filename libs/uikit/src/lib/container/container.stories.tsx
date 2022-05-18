import { Meta, Story } from '@storybook/react';
import { theme } from '../theme';
import { Container, ContainerProps } from './container';

export default {
  component: Container,
  title: 'Container',
} as Meta;

const Content = () => (
  <div
    style={{
      backgroundColor: theme.colors.primary500,
      borderRadius: theme.borderRadius.md,
    }}
  >
    <p style={{ textAlign: 'center', color: '#FFFFFF' }}>This is my content</p>
  </div>
);

const BasicTemplate: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <Content />
  </Container>
);

const FluidTemplate: Story<ContainerProps> = (args) => (
  <Container {...args} fluid>
    <Content />
  </Container>
);

export const Basic = BasicTemplate.bind({});
export const Fluid = FluidTemplate.bind({});
