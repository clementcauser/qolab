import Icon, { IconProps } from '../Icon';

const EmailIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="email">
          <rect width="24" height="24" opacity="0" />
          <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
        </g>
      </g>
    </Icon>
  );
};

export default EmailIcon;