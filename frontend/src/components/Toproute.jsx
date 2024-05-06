import React from "react";
import india from "../assets/indian.png";
import mumbai from "../assets/mumbai.jpeg";
import { MdFlight } from "react-icons/md";

const Toproute = () => {
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-center items-center">
          <img className="h-6 w-8" src={india} alt="" />
          <div className="font-bold text-3xl px-4">Top Routes</div>
          <img className="h-6 w-8" src={india} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 mx-auto max-w-6xl">
        {routes.map((route, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-4 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <div className="w-24 h-24 flex justify-center items-center">
              <img src={mumbai} className="h-12 w-12 rounded-xl" alt="" />
            </div>
            <div className="flex items-center mt-2">
              <div className="font-semibold text-xl">{route.from}</div>
              <div className="mx-2">
                <MdFlight className="h-8 w-8" />
              </div>
              <div className="font-semibold text-xl">{route.to}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const routes = [
  { from: "Chennai", to: "Mumbai", img: { mumbai } },
  { from: "Delhi", to: "Ahemdabad" },
  { from: "Delhi", to: "Lucknow" },
  { from: "Mumbai", to: "Chennai" },
  { from: "Mumbai", to: "Dubai" },
  { from: "Mumbai", to: "Kolkata" },
  { from: "Hyderabad", to: "Banglore" },
  { from: "Mumbai", to: "Jaipur" },
];

export default Toproute;
