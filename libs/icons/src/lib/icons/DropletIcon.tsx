import Icon, { IconProps } from '../Icon';

const DropletIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="droplet-outline">
          <rect
            x=".1"
            y=".1"
            width="24"
            height="24"
            transform="rotate(.48 11.987 11.887)"
            opacity="0"
          />
          <path d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1zm.13-15.57L8.24 9.45a5.74 5.74 0 0 0-.07 8A5.43 5.43 0 0 0 12 19.1a5.42 5.42 0 0 0 3.9-1.61 5.72 5.72 0 0 0 .06-8z" />
        </g>
      </g>
    </Icon>
  );
};

export default DropletIcon;
