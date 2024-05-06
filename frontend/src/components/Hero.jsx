import React, { useState } from "react";
import india from "../assets/indian.png";
import ImageSlider from "./ImageSlider";
import Toproute from "./Toproute";
import Tourist from "./Tourist";
import WhyUs from "./WhyUs";
const Hero = () => {
  const [option, setoption] = useState("");
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-center items-center">
          <div>
            <img className="h-6 w-8" src={india} alt="" />
          </div>
          <div className="font-bold text-3xl pl-4 pr-4">Exclusive Offers</div>
          <div>
            <img className="h-6 w-8" src={india} alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div
            className={`font-bold text-lg 
          ${
            option == "BestOffers"
              ? "bg-blue-500 h-8 w-40 rounded-2xl pr-4 flex justify-center items-center "
              : " hover:bg-blue-500 hover:h-8 hover:w-40 hover:rounded-2xl pr-4  hover:flex hover:justify-center hover:items-center"
          }
         `}
            onClick={() => {
              setoption("BestOffers");
            }}
          >
            Best Offers
          </div>
          <div
            className={`font-bold text-lg 
          ${
            option == "Flights"
              ? "bg-blue-500 h-8 w-40 rounded-2xl pr-4 flex justify-center items-center "
              : " hover:bg-blue-500 hover:h-8 hover:w-40 hover:rounded-2xl pr-4  hover:flex hover:justify-center hover:items-center"
          }
         `}
            onClick={() => {
              setoption("Flights");
            }}
          >
            Flights
          </div>
          <div
            className={`font-bold text-lg 
          ${
            option == "Hotels"
              ? "bg-blue-500 h-8 w-40 rounded-2xl pr-4 flex justify-center items-center "
              : " hover:bg-blue-500 hover:h-8 hover:w-40 hover:rounded-2xl pr-4  hover:flex hover:justify-center hover:items-center"
          }
         `}
            onClick={() => {
              setoption("Hotels");
            }}
          >
            Hotels
          </div>
          <div
            className={`font-bold text-lg 
          ${
            option == "Bus"
              ? "bg-blue-500 h-8 w-40 rounded-2xl pr-4 flex justify-center items-center "
              : " hover:bg-blue-500 hover:h-8 hover:w-40 hover:rounded-2xl pr-4  hover:flex hover:justify-center hover:items-center"
          }
         `}
            onClick={() => {
              setoption("Bus");
            }}
          >
            Bus
          </div>
          <div
            className={`font-bold text-lg 
          ${
            option == "Holidays"
              ? "bg-blue-500 h-8 w-40 rounded-2xl pr-4 flex justify-center items-center "
              : " hover:bg-blue-500 hover:h-8 hover:w-40 hover:rounded-2xl pr-4  hover:flex hover:justify-center hover:items-center"
          }
         `}
            onClick={() => {
              setoption("Holidays");
            }}
          >
            Holidays
          </div>
          <div
            className={`font-bold text-lg 
          ${
            option == "Cabs"
              ? "bg-blue-500 h-8 w-40 rounded-2xl pr-4 flex justify-center items-center "
              : " hover:bg-blue-500 hover:h-8 hover:w-40 hover:rounded-2xl pr-4  hover:flex hover:justify-center hover:items-center"
          }
         `}
            onClick={() => {
              setoption("Cabs");
            }}
          >
            Cabs
          </div>
        </div>
      </div>
      <div>
        <ImageSlider option={option} />
      </div>
      <div>
        <Toproute />
      </div>
      <div>
        <Tourist />
      </div>
      <div>
        <WhyUs />
      </div>
    </>
  );
};

export default Hero;
