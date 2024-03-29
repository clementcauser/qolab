import Icon, { IconProps } from '../Icon';

const SmartphoneIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="smartphone">
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />
          <path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z" />
          <circle cx="12" cy="16.5" r="1.5" />
          <path d="M14.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z" />
        </g>
      </g>
    </Icon>
  );
};

export default SmartphoneIcon;
