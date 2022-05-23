import { render } from '@testing-library/react';

import TextInput from './text-input';

describe('TextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TextInput
        inputId="inputId"
        label="email"
        onChange={console.log}
        value="address@email.com"
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
