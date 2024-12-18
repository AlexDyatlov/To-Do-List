import clsx from 'clsx';

import spriteSvg from '../../../assets/sprite.svg';

interface SvgIconProps {
  name: string;
  size: string;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, size, className }) => {
  return (
    <svg className={clsx('shrink-0 fill-current', className)} width={size} height={size}>
      <use xlinkHref={`${spriteSvg}#${name}`} />
    </svg>
  );
};

export default SvgIcon;
