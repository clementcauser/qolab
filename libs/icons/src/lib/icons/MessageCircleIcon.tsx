import Icon, { IconProps } from '../Icon';

const MessageCircleIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="message-circle">
          <circle cx="12" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
          <circle cx="8" cy="12" r="1" />
          <path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z" />
          <rect width="24" height="24" opacity="0" />
        </g>
      </g>
    </Icon>
  );
};

export default MessageCircleIcon;