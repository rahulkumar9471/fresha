import React from "react";
import notfound from "../../image/notfound.jpg";
import CustomLink from "../utils/CustomLink";

const NotFound = () => {
  return (
    <section className="">
      <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
        <div className="lg:flex gap-x-10">
          <div className="container mx-auto">
            <div className="md:flex justify-center items-center gap-x-14">
              <div className="w-full sm:w-full md:w-full text-center sm:text-center md:text-center lg:text-center">
                <div className="p-2 flex justify-center">
                  <div className="relative flex-col justify-center items-center rounded-[4px]">
                    <img src={notfound} className="w-full h-96" alt="" />
                    <CustomLink
                      to="/"
                      className={
                        "flex justify-center items-center h-10 font-semibold bg-primary text-tertiary focus:outline-none rounded-[4px] "
                      }
                    >
                      Go to Home
                    </CustomLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
