import React from "react";

interface Props {
  placeholder?: string;
  id: string;
  onChange?: any;
  name?: string;
  value?: string;
}

const AppInput: React.FC<Props> = ({
  placeholder,
  id,
  onChange,
  name,
  value,
}) => {
  return (
    <div className="relative rounded-md shadow-sm">
      <label htmlFor={id} className="sr-only">
        {id}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        className="form-input block w-full sm:text-sm sm:leading-5"
        placeholder={placeholder}
      />
    </div>
  );
};

export default AppInput;
