import Icon, { IconProps } from '../Icon';

const PersonDoneIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g data-name="Layer 2">
        <g data-name="person-done">
          <rect width="24" height="24" opacity="0" />
          <path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z" />
          <path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
          <path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
        </g>
      </g>
    </Icon>
  );
};

export default PersonDoneIcon;
