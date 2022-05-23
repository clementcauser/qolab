import Icon, { IconProps } from '../Icon';

const MoreVerticalIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="more-vertical">
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="19" r="2" />
        </g>
      </g>
    </Icon>
  );
};

export default MoreVerticalIcon;
