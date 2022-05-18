import Icon, { IconProps } from '../Icon';

const BarChart2Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="bar-chart-2">
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />
          <path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" />
          <path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
          <path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z" />
        </g>
      </g>
    </Icon>
  );
};

export default BarChart2Icon;