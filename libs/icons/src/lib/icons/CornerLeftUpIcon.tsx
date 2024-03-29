import Icon, { IconProps } from '../Icon';

const CornerLeftUpIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="corner-left-up">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path d="M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z" />
        </g>
      </g>
    </Icon>
  );
};

export default CornerLeftUpIcon;
