import React from "react";

const Card = () => {
  return (
    <div className="W-full bg-[#FFFFFF] border-2 mt-6 shadow-xl rounded-[4px]">
      <div className="">
        <div className="relative h-[200px] overflow-hidden rounded-t-[4px]">
          <img
            src="https://images.fresha.com/locations/location-profile-images/1005872/1112606/70fec5b3-f324-4913-aafb-855c648bf8b5.jpg?class=venue-gallery-small&class=width-small"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
          />
        </div>
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-x-2">
            <div className="relative h-[40px] w-[40px] border-2 border-[#000000] rounded-full overflow-hidden">
              <img
                src="https://images.fresha.com/locations/location-profile-images/1005872/1112606/70fec5b3-f324-4913-aafb-855c648bf8b5.jpg?class=venue-gallery-small&class=width-small"
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
                alt=""
              />
            </div>
            <a href="./school.html">
              <h1 className="text-l font-bold">Decadence Hair and Beauty</h1>
              <p>
                <i className="fa-solid fa-location-dot mr-1"></i>
                Gardanibagh, Patna, Bihar, In
              </p>
            </a>
          </div>

          <div className="border-b-2 mt-4 border-[#D6D6D6]"></div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-center">
              <i className="fa-solid fa-eye"></i>
              <span className="border-2 border-primary px-2 py-1 rounded ">
                Spa
              </span>
            </div>
            <div className="flex items-center gap-x-1">
              <div>
                <p className="text-[12px] text-right font-semibold">
                  Very Good
                </p>
                <p className="text-[12px] text-right">2 Reviews</p>
              </div>
              <button className="px-2 py-1 border-2 border-[#000000] text-[#FFFFFF] bg-[#000000] rounded focus:outline-none">
                4.0
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
