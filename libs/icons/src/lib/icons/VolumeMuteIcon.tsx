import Icon, { IconProps } from '../Icon';

const VolumeMuteIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="volume-mute">
          <rect width="24" height="24" opacity="0" />
          <path d="M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1zM6 14.43h4.33a1 1 0 0 1 .57.17l5.1 3.5V5.9l-5.1 3.5a1 1 0 0 1-.57.17H6z" />
        </g>
      </g>
    </Icon>
  );
};

export default VolumeMuteIcon;
