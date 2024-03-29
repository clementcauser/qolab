import Icon, { IconProps } from '../Icon';

const CropIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="crop">
          <rect width="24" height="24" opacity="0" />
          <path d="M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16z" />
        </g>
      </g>
    </Icon>
  );
};

export default CropIcon;
