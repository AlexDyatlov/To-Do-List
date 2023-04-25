type TitleTag = 'button' | 'a' | 'div';

interface ButtonProps {
  className: string;
  children: string | React.ReactNode;
  tag: TitleTag;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const initialStyles = 'transition-colors duration-300 ease-in-out';

const Button: React.FC<ButtonProps> = ({ className, children, tag, onClick, ...rest }) => {
  const TagName = tag;

  return (
    <TagName
      className={initialStyles + ' ' + className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </TagName>
  );
};

export default Button;
