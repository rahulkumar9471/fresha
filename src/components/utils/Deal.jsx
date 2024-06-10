import React from "react";

const Deal = ({name, image, desc}) => {
  return (
    <div className="px-8 py-4 rounded bg-secondary">
      <div className="flex justify-center items-center gap-x-2">
        <div>
          <h4 className="text-2xl font-semibold">{name}</h4>
          <p>
            {desc}
          </p>
        </div>
        <div className="relative flex justify-center items-center h-[200px] w-full overflow-hidden rounded-[4px]">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Deal;
