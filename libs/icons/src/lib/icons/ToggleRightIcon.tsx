import Icon, { IconProps } from '../Icon';

const ToggleRightIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="toggle-right">
          <rect width="24" height="24" opacity="0" />
          <path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z" />
          <path d="M15 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
        </g>
      </g>
    </Icon>
  );
};

export default ToggleRightIcon;
