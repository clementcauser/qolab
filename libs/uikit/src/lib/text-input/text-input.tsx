import { AlertTriangleIcon, CloseCircleIcon } from '@qolab/icons';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import Text from '../text/text';
import { theme } from '../theme';
import TextInputActionButton from './text-input-clearable-button';
import TextInputLabel from './text-input-label';

export type TextInputProps = {
  label: string;
  inputId: string;
  value?: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  className?: string;
  inputAdornment?: ReactNode;
} & ComponentPropsWithoutRef<'input'>;

const StyledTextInput = styled.input`
  padding: ${theme.spacing[2]} ${theme.spacing[5]};
  background-color: ${theme.colors.gray50};
  border: medium none;
  color: ${theme.colors.text};
  border-radius: ${theme.spacing[6]};
  outline: currentcolor none medium;
  width: 100%;
  height: 100%;
  min-width: 0px;
  appearance: none;

  transition: all 0.2s;

  &::placeholder {
    color: ${theme.colors.gray900};
  }

  &:focus {
    transform: translateY(-${theme.spacing[2]}) scale(1.005);
    box-shadow: ${theme.shadows.sm};
  }
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${theme.spacing[2]};
  margin-left: ${theme.spacing[5]};

  ${Text} {
    margin-left: ${theme.spacing[2]};
    margin-top: 0;
    font-size: ${theme.fontSizes.xs};
  }
`;

const TextInputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: calc(2 * ${theme.spacing[9]});
  border-radius: ${theme.spacing[6]};
`;

export const TextInput = styled(
  ({
    label,
    inputId,
    onChange,
    value,
    errorMessage,
    inputAdornment,
    className,
    ...inputProps
  }: TextInputProps) => {
    return (
      <div className={className}>
        <TextInputLabel as="label" htmlFor={inputId}>
          {label}
        </TextInputLabel>
        <TextInputContainer>
          <StyledTextInput
            {...inputProps}
            id={inputId}
            onChange={(event) => onChange(event.currentTarget.value)}
            value={value}
            aria-invalid={!!errorMessage}
            aria-describedby={errorMessage && 'text-input-error-message'}
          />
          {inputAdornment
            ? inputAdornment
            : value &&
              value.length > 0 && (
                <TextInputActionButton onClick={() => onChange('')}>
                  <CloseCircleIcon color={theme.colors.gray700} />
                </TextInputActionButton>
              )}
        </TextInputContainer>
        {errorMessage && (
          <ErrorMessageContainer>
            <AlertTriangleIcon size="small" color={theme.colors.danger500} />
            <Text role="alert" status="danger" id="text-input-error-message">
              {errorMessage}
            </Text>
          </ErrorMessageContainer>
        )}
      </div>
    );
  }
)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default TextInput;
