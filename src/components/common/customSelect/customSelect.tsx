import { useEffect, useRef, useState } from 'react';

import SvgIcon from '../svgIcon/svgIcon';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  className?: string;
  defaultLabel: string;
  options: Option[];
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  className,
  defaultLabel,
  options,
  onChange
}) => {
  const [visibleSelect, setVisibleSelect] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const activeLabel = options.find((obj) => obj.value === defaultLabel)?.label;

  const toggleVisibleSelect = () => {
    setVisibleSelect(!visibleSelect);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const path = event.composedPath && event.composedPath();
    if (sortRef.current && (!path || !path.includes(sortRef.current))) {
      setVisibleSelect(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => setVisibleSelect(false);
  }, []);

  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className={className + ' ' + 'relative text-sm text-[#31352B]'} ref={sortRef}>
      <button
        onClick={toggleVisibleSelect}
        className="w-full rounded-[5px] border border-[#C2C2C2] bg-white px-[15px] py-[10px] text-left transition-colors hover:border-blue-500 hover:text-blue-500 focus:outline-none focus-visible:border-blue-500"
        type="button"
      >
        {activeLabel ?? defaultLabel}
        <SvgIcon
          name="arrow-down"
          size="15"
          className={
            'pointer-events-none absolute right-[15px] top-2/4 -translate-y-1/2 text-current transition-transform' +
            (visibleSelect ? ' rotate-180' : '')
          }
        />
      </button>
      {visibleSelect && (
        <ul className="absolute left-0 right-0 top-[55px] rounded-[3px] border border-[#C2C2C2] bg-white p-[15px]">
          {options.map((option, index) => {
            return (
              <li key={`${option.value}_${index}`}>
                <button
                  className="w-full py-2 text-left transition-colors hover:text-blue-500"
                  type="button"
                  onClick={() => handleChange(option.value)}
                >
                  {option.label} приоритет
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
