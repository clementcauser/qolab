import Icon, { IconProps } from '../Icon';

const MinusIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="minus">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
        </g>
      </g>
    </Icon>
  );
};

export default MinusIcon;
