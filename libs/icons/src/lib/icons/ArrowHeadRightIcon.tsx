import Icon, { IconProps } from '../Icon';

const ArrowHeadRightIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="arrowhead-right">
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />
          <path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z" />
          <path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z" />
        </g>
      </g>
    </Icon>
  );
};

export default ArrowHeadRightIcon;
