import React, { useState } from "react";

const FormSelect = ({
  name,
  placeholder,
  label,
  defaultValue,
  multiple,
  options,
  className,
  ...rest
}) => {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className="flex flex-col-reverse">
      <select
        id={name}
        name={name}
        className={
          `w-full sm:w-full rounded-[4px] border-2 border-[#D6D6D6] p-[10px] px-[10px] mb-2 mt-1 bg-transparent peer ` +
          className
        }
        value={selected} // Set the value attribute to the selected state
        onChange={(e) => setSelected(e.target.value)}
        {...rest}
      >
        {/* Render dynamic options */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className="mb-[6px] peer-focus:text-[#000000] text-[#181818]"
      >
        {label}
      </label>
    </div>
  );
};

export default FormSelect;
