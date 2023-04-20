import { useEffect, useRef, useState } from 'react';

import SvgIcon from '../svgIcon/svgIcon';

const CustomSelect = ({ className, defaultLabel, options }) => {
  const [visibleSelect, setVisibleSelect] = useState(false);
  const sortRef = useRef(null);

  const toggleVisibleSelect = () => {
    setVisibleSelect(!visibleSelect);
  };

  const handleOutsideClick = e => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisibleSelect(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => setVisibleSelect(false);
  }, []);

  return (
    <div className={className + ' ' + 'relative text-[#31352B] text-sm'} ref={sortRef}>
      <button
        onClick={toggleVisibleSelect}
        className="w-full text-left hover:text-blue-500 transition-colors py-[10px] px-[15px] border border-[#C2C2C2] rounded-[5px] bg-white hover:border-blue-500 focus-visible:border-blue-500 focus:outline-none"
        type="button"
      >
        {defaultLabel}
        <SvgIcon
          name="arrow-down"
          size="15"
          className={
            'absolute right-[15px] top-2/4 -translate-y-1/2 text-current pointer-events-none transition-transform' +
            (visibleSelect ? ' rotate-180' : '')
          }
        />
      </button>
      {visibleSelect && (
        <ul className="absolute left-0 right-0 top-[55px] bg-white border border-[#C2C2C2] rounded-[3px] p-[15px]">
          {options.map((option, index) => {
            return (
              <li key={`${option.value}_${index}`}>
                <button
                  className="py-2 w-full text-left hover:text-blue-500 transition-colors"
                  type="button"
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
