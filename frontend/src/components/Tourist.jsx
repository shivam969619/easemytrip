import React from "react";
import india from "../assets/indian.png";
import LakshdweepImage from "../assets/lakshdweep.jpeg";
import andman from "../assets/andaman.png";
import Kashmir from "../assets/kashmir.png";
import lakshdweep from "../assets/lakshdweep.png";
import leh from "../assets/leh.png";
import Dubai from "../assets/Dubai.png";
import andaman from "../assets/andman.png";
import Bali from "../assets/Bali.png";
import kerla from "../assets/Kerla.png";
import paris from "../assets/slider/paris.png";
import banglore from "../assets/banglore.png";
import jaipur from "../assets/jaipur.png";

const Tourist = () => {
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-center items-center">
          <img className="h-6 w-8" src={india} alt="India" />
          <div className="font-bold text-4xl px-4">
            Famous Tourist Attractions
          </div>
          <img className="h-6 w-8" src={india} alt="India" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {Destination.map((place, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg p-4 transition duration-300 shadow-md"
            >
              <img
                src={place.image}
                alt={place.place}
                className="h-20 w-20 object-cover rounded-full mb-4 hover:opacity-80 transition duration-300"
              />
              <div className="text-xl font-semibold">{place.place}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Destination = [
  { place: "Lakshadweep", image: lakshdweep },
  { place: "Andaman", image: andman },
  { place: "Kashmir", image: Kashmir },
  { place: "Jaipur", image: jaipur },
  { place: "Bangalore", image: banglore },
  { place: "Paris", image: paris },
  { place: "Leh", image: leh },
  { place: "Bali", image: Bali },
  { place: "Dubai", image: Dubai },
  { place: "Kerala", image: kerla },
  { place: "Pathanpur", image: andaman },
  { place: "Uska", image: andaman },
];

export default Tourist;
