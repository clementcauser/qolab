import Icon, { IconProps } from '../Icon';

const BookIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="book">
          <rect width="24" height="24" opacity="0" />
          <path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z" />
        </g>
      </g>
    </Icon>
  );
};

export default BookIcon;
