import { EyeIcon } from '@qolab/icons';
import { Story, Meta } from '@storybook/react';
import { theme } from '../theme';
import { TextInputProps, TextInput } from './text-input';
import TextInputActionButton from './text-input-clearable-button';

export default {
  component: TextInput,
  title: 'TextInput',
} as Meta;

const BasicTemplate: Story<TextInputProps> = (args) => (
  <TextInput
    {...args}
    inputId="basic-input-id"
    label="Email"
    placeholder="Type here..."
  />
);
export const Basic = BasicTemplate.bind({});

const WithErrorTemplate: Story<TextInputProps> = (args) => (
  <TextInput
    {...args}
    inputId="with-error-input-id"
    label="Email"
    placeholder="Type here..."
    errorMessage="Please enter a valid email"
  />
);
export const WithError = WithErrorTemplate.bind({});

const ClearableTemplate: Story<TextInputProps> = (args) => (
  <TextInput
    {...args}
    inputId="clearable-input-id"
    label="Email"
    value="address@email.com"
    placeholder="Type here..."
  />
);
export const Clearable = ClearableTemplate.bind({});

const NumberTemplate: Story<TextInputProps> = (args) => (
  <TextInput
    {...args}
    inputId="number-input-id"
    label="Count"
    placeholder="Type here..."
    type="number"
  />
);
export const Number = NumberTemplate.bind({});

const PasswordTemplate: Story<TextInputProps> = (args) => (
  <TextInput
    {...args}
    inputId="password-input-id"
    label="Password"
    placeholder="Type here..."
    type="password"
    inputAdornment={
      <TextInputActionButton>
        <EyeIcon color={theme.colors.gray700} />
      </TextInputActionButton>
    }
  />
);
export const Password = PasswordTemplate.bind({});
