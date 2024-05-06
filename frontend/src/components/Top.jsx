import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import flighticon from "../assets/flighticon.jpeg";
import { FaTrainSubway } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { MdHolidayVillage } from "react-icons/md";
import { FaCableCar } from "react-icons/fa6";
import activity from "../assets/ACTIVITIES.jpeg";
import { CiCircleMore } from "react-icons/ci";
import flighttt from "../assets/FLIGHTS.jpg";
import { SiHotelsdotcom } from "react-icons/si";
import { MdLocalActivity } from "react-icons/md";
import charter from "../assets/Charter.jpeg";
import { FaCcVisa } from "react-icons/fa";
import cruise from "../assets/cruise.avif";
import gift from "../assets/gitftcard.jpg";
import offer from "../assets/offer.jpeg";
import service from "../assets/service.jpg";
import Card from "./Card";
const Top = () => {
  const [value, setValue] = useState("flights");
  const [isCardShown, setIsCardShown] = useState(false);
  console.log(value);
  const toggleCard = () => {
    setIsCardShown(!isCardShown);
  };

  const hideCard = () => {
    if (!isCardShown) return; // Do not hide if already hidden
    setIsCardShown(false);
  };
  return (
    <>
      <div className="md:flex flex-wrap justify-center mt-4 text-2xl cursor-pointer">
        <div
          className={`${
            value == "flights"
              ? "flex pr-3 bg-blue-600 rounded-2xl justify-center"
              : "flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center"
          }`}
          onClick={() => {
            setValue("flights");
          }}
        >
          <MdFlight className="mt-1 pr-1" />
          Flights
        </div>
        <div
          className={`${
            value == "hotels"
              ? "flex pr-3 bg-blue-600 rounded-2xl justify-center"
              : "flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center"
          }`}
        >
          <FaHotel className="mt-1 pr-1" />
          Hotels
        </div>
        <div
          className="flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center w-40 h-30"
          onClick={() => {
            setValue("hotelsflights");
          }}
        >
          <SiHotelsdotcom className="mt-1 pr-1" />
          Flight+Hotel
        </div>
        <div
          className="flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center w-40 h-30"
          onClick={() => {
            setValue("trains");
          }}
        >
          <FaTrainSubway className="mt-1 pr-1" />
          Trains
        </div>
        <div
          className="flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center w-40"
          onClick={() => {
            setValue("bus");
          }}
        >
          {" "}
          <FaBusAlt className="mt-1 pr-1" />
          Bus
        </div>
        <div
          className="flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center w-40 h-30"
          onClick={() => {
            setValue("holidays");
          }}
        >
          <MdHolidayVillage className="mt-1 pr-1" />
          Holidays
        </div>
        <div
          className="flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center w-40 h-30"
          onClick={() => {
            setValue("Cabs");
          }}
        >
          <FaCableCar className="mt-1 pr-1" />
          Cabs
        </div>
        <div
          className="flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center w-40 h-30"
          onClick={() => {
            setValue("Activities");
          }}
        >
          <MdLocalActivity className="mt-1 pr-1" />
          Activities
        </div>
        <div
          className="flex pr-3 hover:bg-blue-600 hover:rounded-2xl justify-center w-40 h-30"
          onMouseEnter={toggleCard}
          onMouseLeave={hideCard}
          onClick={toggleCard}
        >
          <CiCircleMore className="mt-1 pr-1" />
          {isCardShown && (
            <div className="absolute bg-white p-2 rounded shadow-md mt-6 w-96 h-100 border-s-2 ">
              <div className="flex">
                <img className="h-16 w-16 rounded-2xl" src={charter} alt="" />
                <div className="font-semibold pl-2">
                  Charters
                  <br />
                  <h5 className="font-thin text-sm">
                    Book Private Charters here
                  </h5>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-400 mt-1 opacity-25"></div>
              <div className="flex">
                <FaCcVisa className="h-16 w-16 rounded-2xl" />
                <div className="font-semibold pl-2">
                  Visa
                  <br />
                  <h5 className="font-thin text-sm">
                    Apply for UAE Visa Online
                  </h5>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-400 mt-1 opacity-25"></div>
              <div className="flex">
                <img className="h-16 w-16 rounded-2xl" src={service} alt="" />
                <div className="font-semibold pl-2">
                  Airport Service
                  <br />
                  <h5 className="font-thin text-sm">Enjoy Airport Service</h5>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-400 mt-1 opacity-25"></div>
              <div className="flex">
                <img className="h-16 w-16 rounded-2xl" src={cruise} alt="" />
                <div className="font-semibold pl-2">
                  Cruise
                  <br />
                  <h5 className="font-thin text-sm">Book Cruise here</h5>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-400 mt-1 opacity-25"></div>
              <div className="flex">
                <img className="h-16 w-16 rounded-2xl" src={gift} alt="" />
                <div className="font-semibold pl-2">
                  Gift Card
                  <br />
                  <h5 className="font-thin text-sm">Buy Gift Card here</h5>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-400 mt-1 opacity-25"></div>
              <div className="flex">
                <img className="h-16 w-16 rounded-2xl" src={offer} alt="" />
                <div className="font-semibold pl-2">
                  Offers
                  <br />
                  <h5 className="font-thin text-sm">
                    Check latest best Offers
                  </h5>
                </div>
              </div>
            </div>
          )}
          More
        </div>
      </div>
      <Card value={value} setValue={value} />
    </>
  );
};

export default Top;
