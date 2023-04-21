interface TextFieldProps {
  name: string;
  type: string;
  label?: string;
  placeholder: string;
  value: string | number;
  onChange: (event: { name: string; value: string | number }) => void;
}

const TextField: React.FC<TextFieldProps> = ({ name, label, placeholder, value, type, onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="w-full">
      <label className="block text-[#505050] text-xl" htmlFor={name}>
        {label}
      </label>
      <div className="flex flex-wrap items-stretch w-full">
        <input
          id={name}
          type={type}
          name={name}
          className="flex-auto w-px min-w-0 py-2 px-[18px] border border-[#C2C2C2] focus:outline-none focus-visible:shadow-[0_0_0_2px_#3b82f6] rounded-[5px] focus-visible:border-transparent placeholder:text-[#C1C1C1] placeholder:text-[16px] text-leading-5"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          autoComplete="on"
        />
      </div>
    </div>
  );
};

export default TextField;
