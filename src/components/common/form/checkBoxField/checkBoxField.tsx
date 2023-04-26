interface CheckBoxFieldProps {
  name: string;
  value?: boolean;
  children?: string;
  onChange: (event: { name: string; value: boolean }) => void;
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({ name, value, children, onChange }) => {
  const handleChange = () => {
    onChange({ name, value: !value });
  };

  return (
    <>
      <div className="flex">
        <input
          className="w-6 h-6 border border-solid border-[#f60b0b] rounded-[3px] shrink-0 cursor-pointer"
          type="checkbox"
          value={name}
          id={name}
          onChange={handleChange}
          checked={value}
        />
        <label
          className="text-[#505050] text-[18px] leading-[23px] cursor-pointer"
          htmlFor={name}
        >
          {children}
        </label>
      </div>
    </>
  );
};

export default CheckBoxField;
