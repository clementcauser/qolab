import Icon, { IconProps } from '../Icon';

const CheckmarkIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="checkmark">
          <rect width="24" height="24" opacity="0" />
          <path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
        </g>
      </g>
    </Icon>
  );
};

export default CheckmarkIcon;
