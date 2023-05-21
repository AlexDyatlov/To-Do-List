interface TextFieldProps {
  name: string;
  type: string;
  label?: string;
  placeholder: string;
  value: string;
  onChange: (target: { name: string; value: string }) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  value,
  type,
  onChange
}) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="w-full">
      <label className="block text-xl text-[#505050]" htmlFor={name}>
        {label}
      </label>
      <div className="flex w-full flex-wrap items-stretch">
        <input
          id={name}
          type={type}
          name={name}
          className="text-leading-5 w-px min-w-0 flex-auto rounded-[5px] border border-[#C2C2C2] px-[18px] py-2 placeholder:text-[16px] placeholder:text-[#C1C1C1] focus:outline-none focus-visible:border-transparent focus-visible:shadow-[0_0_0_2px_#3b82f6]"
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
