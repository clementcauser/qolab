import Icon, { IconProps } from '../Icon';

const NpmIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="npm">
          <rect width="24" height="24" opacity="0" />
          <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
          <rect x="12" y="9" width="4" height="10" />
        </g>
      </g>
    </Icon>
  );
};

export default NpmIcon;
