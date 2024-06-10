import React from "react";

const FormContainer = ({ children, className }) => {
  return (
    <section>
      <div className="">
        <div
          className={
            "flex justify-center mx-auto items-center " + className
          }
        >
          <div className="shadow-xl border-t-4 border-[#000000] p-10 rounded-lg bg-[#FFFFFF]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
