import { ShoppingCartIcon } from '@qolab/icons';
import { Story, Meta } from '@storybook/react';
import { ButtonProps, Button } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const BasicTemplate: Story<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);

const SizesTemplate: Story<ButtonProps> = () => (
  <>
    <Button size="mini">Size mini</Button>
    <span style={{ marginTop: 24 }} />
    <Button size="small">Size small</Button>
    <span style={{ marginTop: 24 }} />
    <Button size="medium">Size Medium</Button>
    <span style={{ marginTop: 24 }} />
    <Button size="large">Size Large</Button>
  </>
);

const ColorsTemplate: Story<ButtonProps> = () => (
  <>
    <Button status="primary">Primary</Button>
    <Button status="secondary">Secondary</Button>
    <Button status="info">Info</Button>
    <Button status="success">Success</Button>
    <Button status="warning">Warning</Button>
    <Button status="danger">Danger</Button>
  </>
);

const RoundedTemplate: Story<ButtonProps> = () => (
  <Button rounded>Rounded button</Button>
);

const OutlinedTemplate: Story<ButtonProps> = () => (
  <>
    <Button outlined status="primary">
      Primary outlined
    </Button>
    <Button outlined status="secondary">
      Secondary outlined
    </Button>
    <Button outlined status="info">
      Info outlined
    </Button>
    <Button outlined status="success">
      Success outlined
    </Button>
    <Button outlined status="warning">
      Warning outlined
    </Button>
    <Button outlined status="danger">
      Danger outlined
    </Button>
  </>
);

const IconsTemplate: Story<ButtonProps> = () => (
  <>
    <Button iconLeft={<ShoppingCartIcon />}>Icon on the left</Button>
    <Button iconRight={<ShoppingCartIcon />}>Icon on the right</Button>
  </>
);

export const Basic = BasicTemplate.bind({});
export const Sizes = SizesTemplate.bind({});
export const Colors = ColorsTemplate.bind({});
export const Rounded = RoundedTemplate.bind({});
export const Outlined = OutlinedTemplate.bind({});
export const Icons = IconsTemplate.bind({});
