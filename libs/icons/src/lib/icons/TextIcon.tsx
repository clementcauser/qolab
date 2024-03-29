import Icon, { IconProps } from '../Icon';

const TextIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="text">
          <rect width="24" height="24" opacity="0" />
          <path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
        </g>
      </g>
    </Icon>
  );
};

export default TextIcon;
