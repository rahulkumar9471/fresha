import React from "react";
import image1 from "../../image/image1.png";
import image3 from "../../image/image3.png";
import image4 from "../../image/image4.png";
import spa from "../../image/spa.png";
import hair from "../../image/hair.png";
import therapy from "../../image/therapy.png";
import appointment from "../../image/appointment.jpg";
import Card from "../utils/Card";
import CatButton from "../utils/CatButton";
import CatCard from "../utils/CatCard";
import Deal from "../utils/Deal";
import ChooseCard from "../utils/ChooseCard";
import { useAuth } from "../../hooks";

const Home = () => {
  const { authInfo } = useAuth();
  // console.log(authInfo);
  return (
    <>
      <section>
        <div className="w-full h-[400px] bg-[#FFE4E1] bg-no-repeat bg-center bg-cover relative">
          <div className="absolute left-0 right-0 md:p-10 px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center">
              <div className="w-full sm:w-full md:w-full text-center sm:text-center md:text-center lg:text-left md:ml-0 lg:ml-10">
                <p className="mb-2">First Booking Up TO 30% OFF</p>
                <h1 className="text-primary text-3xl sm:text-3xl md:text-4xl lg:text-[42px] md:text-center lg:text-left font-bold">
                  Book local beauty and wellness services
                </h1>
                <p className="text-primary mt-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Modi, voluptatem! Facere soluta et mollitia aliquam suscipit
                  inventore quis quod quo.
                </p>
                <div className="mt-8 flex justify-center md:justify-center lg:justify-start gap-x-4 md:gap-x-10">
                  <button className="px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-tertiary rounded focus:outline-none">
                    Learn More
                  </button>
                  <a
                    href="/auth/sign-up"
                    className="px-4 py-2 border-2 bg-primary text-tertiary hover:opacity-80 rounded focus:outline-none"
                  >
                    Create Account
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-full md:w-full text-center sm:text-center md:text-center lg:text-center mx-auto mt-10 sm:mt-10 md:mt-10 lg:mt-0">
                <div>
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] pt-8">
          <div className="mt-10">
            <h3 className="text-3xl mb-1 font-bold">Trending Category</h3>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-6">
            <CatCard name="Spa" image={spa} />
            <CatCard name="Hair" image={hair} />
            <CatCard name="Therapy" image={therapy} />
            <CatCard name="Therapy" image={therapy} />
            <CatCard name="Therapy" image={therapy} />
          </div>
        </div>
      </section>
      <section>
        <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] pt-8">
          <div className="lg:flex mt-4 gap-x-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <Deal
                  name="Best Deal"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid, nesciunt."
                  image={image3}
                />
                <Deal
                  name="New Arrival"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid, nesciunt."
                  image={image4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] pt-8">
          <div className="mt-6 text-center">
            <h3 className="text-3xl mb-1 font-bold">Most Popular Outlets</h3>
            <div className="flex justify-center items-center gap-x-4 mt-4">
              <CatButton>All</CatButton>
              <CatButton>Spa</CatButton>
              <CatButton>Hair</CatButton>
              <CatButton>Therapy</CatButton>
            </div>
          </div>
          <div className="mt-2">
            <div className="lg:flex gap-x-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#181818] text-[#FFFFFF] mt-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] gap-x-6">
            <div className="flex-col justify-center items-center text-center py-8 gap-x-2">
              <img
                src="https://edublog.co/assets/Image/No-Fees.webp"
                width="50"
                height="90.25"
                alt=""
                className="mx-auto"
              />
              <div>
                <p className="text-xl">10,000+ Outlets</p>
                <p className="text-l">Search Best Outlets in your city.</p>
              </div>
            </div>
            <div className="flex-col justify-center items-center text-center py-8 gap-x-2">
              <img
                src="https://edublog.co/assets/Image/No-Fees.webp"
                width="50"
                height="90.25"
                alt=""
                className="mx-auto"
              />
              <div>
                <p className="text-xl">Online Branding</p>
                <p className="text-l">
                  Apply for branding best Outlets in India.
                </p>
              </div>
            </div>
            <div className="flex-col justify-center items-center text-center py-8 gap-x-2">
              <img
                src="https://edublog.co/assets/Image/Appointment-Icon.webp"
                width="50"
                height="90.25"
                alt=""
                className="mx-auto"
              />
              <div>
                <p className="text-xl">Appointment</p>
                <p className="text-l">
                  Book an appointment online at any Outlets.
                </p>
              </div>
            </div>
            <div className="flex-col justify-center items-center text-center py-8 gap-x-2">
              <img
                src="https://edublog.co/assets/Image/No-Fees.webp"
                width="50"
                height="90.25"
                alt=""
                className="mx-auto"
              />
              <div>
                <p className="text-xl">No Convenience Fee</p>
                <p className="text-l">Book your appointment free of cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] mb-10">
          <div className="mt-16 text-center">
            <h3 className="text-4xl mb-1 font-bold">Why Choose Us</h3>
            <p className="text-[18px]">
              Benefits Of Online Appointment Services with Us.
            </p>
          </div>
          <div className="mt-6">
            <div className="lg:flex gap-x-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
                  <ChooseCard />
                  <ChooseCard />
                  <ChooseCard />
                  <ChooseCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-6">
          <div className="lg:flex gap-x-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 items-center">
                <div className="md:flex justify-center items-center gap-x-14 mt-10 md:mt-0">
                  <div className="w-full sm:w-full md:w-full text-center sm:text-center md:text-center lg:text-center">
                    <div className="p-2 flex justify-center">
                      <div className="relative flex justify-center items-center rounded-[4px]">
                        <img
                          src={appointment}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex justify-center items-center gap-x-14">
                  <div className="w-full sm:w-full md:w-full sm:text-center md:text-center lg:text-left">
                    <p className="text-xl text-yellow-900">
                      Customize With Your Schedule
                    </p>
                    <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-primary">
                      Personalized Professional Online Appointment on Your
                      Schedule
                    </h2>
                    <div className="border-b-4 mt-4 border-[#D6D6D6] sm:w-10/12 md:w-10/12 lg:w-3/12 sm:mx-auto md:mx-auto lg:mx-0"></div>
                    <p className="text-sm mb-4 mt-4 text-primary">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <button className="px-4 py-3 border-2 border-[#000000] text-[#FFFFFF] bg-[#000000] rounded focus:outline-none">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
