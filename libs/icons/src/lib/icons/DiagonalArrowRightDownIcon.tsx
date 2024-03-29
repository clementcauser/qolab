import Icon, { IconProps } from '../Icon';

const DiagonalArrowRightDownIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="diagonal-arrow-right-down">
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />
          <path d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
        </g>
      </g>
    </Icon>
  );
};

export default DiagonalArrowRightDownIcon;
