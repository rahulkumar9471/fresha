import React from "react";

const CatButton = ({children}) => {
  return (
    <button className="px-3 py-1 border-2 bg-primary text-tertiary hover:opacity-80 rounded focus:outline-none">
      {children}
    </button>
  );
};

export default CatButton;
