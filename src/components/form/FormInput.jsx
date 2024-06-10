import React from "react";

const FormInput = ({name, placeholder, lable, className, ...rest}) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        name={name}
        className={`w-full sm:w-full rounded-[4px] border-2 border-[#D6D6D6] p-[10px] px-[10px] mb-2 mt-1 bg-transparent peer ` + className}
        placeholder={placeholder}
        {...rest}
      />
       <label htmlFor={name} className="mb-[6px] peer-focus:text-[#000000] text-[#181818]">{lable}</label>
    </div>
  );
};

export default FormInput;
