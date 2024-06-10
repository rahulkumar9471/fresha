import React from "react";
import { FaPenToSquare } from "react-icons/fa6";

const ChooseCard = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mt-4">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-[#D6D6D6] rounded-md shadow-lg">
          <FaPenToSquare />
        </span>
      </div>
      <h3 className="text-[#000000] mt-5 text-base font-medium tracking-tight">
        Writes Upside-Down
      </h3>
      <p className="text-[#000000] mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
  );
};

export default ChooseCard;
