import Icon, { IconProps } from '../Icon';

const PowerIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="power">
          <rect width="24" height="24" opacity="0" />
          <path d="M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z" />
          <path d="M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z" />
        </g>
      </g>
    </Icon>
  );
};

export default PowerIcon;
