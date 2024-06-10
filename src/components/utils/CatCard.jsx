import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ name, image, url }) => {
  return (
    <Link to={{url}}>
      <div className="border-2 border-[#000000] p-2 rounded-[4px]">
        <div className="flex justify-center items-center gap-x-2">
          <div className="relative flex justify-center items-center h-[80px] w-[80px] overflow-hidden rounded-[4px]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h6 className="font-semibold">{name}</h6>
            <p className="text-[12px]">4 {name} Outlets Available</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
