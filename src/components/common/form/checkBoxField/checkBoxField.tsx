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
          className="h-6 w-6 shrink-0 cursor-pointer rounded-[3px] border border-solid border-[#f60b0b]"
          type="checkbox"
          value={name}
          id={name}
          onChange={handleChange}
          checked={value}
        />
        <label className="cursor-pointer text-[18px] leading-[23px] text-[#505050]" htmlFor={name}>
          {children}
        </label>
      </div>
    </>
  );
};

export default CheckBoxField;
