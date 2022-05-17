import Icon, { IconProps } from '../Icon';

const MoreHorizontalIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="more-horizontal">
          <rect width="24" height="24" opacity="0" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="5" cy="12" r="2" />
        </g>
      </g>
    </Icon>
  );
};

export default MoreHorizontalIcon;
