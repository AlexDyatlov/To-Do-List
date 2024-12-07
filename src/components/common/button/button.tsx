import clsx from 'clsx';

type TitleTag = 'button' | 'a' | 'div';

export interface ButtonProps {
  className: string;
  children: string | React.ReactNode;
  tag: TitleTag;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  tag,
  disabled,
  onClick,
  ...rest
}) => {
  const TagName = tag;

  return (
    <TagName
      className={clsx('transition-colors duration-300 ease-in-out', className, {
        'cursor-not-allowed bg-[#f0f0f0] !text-[#9d9a9a]': disabled
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </TagName>
  );
};

export default Button;
