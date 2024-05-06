import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Top from "./Top";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

const FlightsCard = () => {
  const [way, setWay] = useState("oneway");
  const [selectedOption, setSelectedOption] = useState(null);
  const [responseData, setResponseData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const options = {
  //       method: "GET",
  //       url: "https://booking-com13.p.rapidapi.com/flights/one-way",
  //       params: {
  //         location_from: "New Delhi, India",
  //         location_to: "Bangalore, India",
  //         departure_date: "2024-07-04",
  //         page: "1",
  //         country_flag: "us",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "459a12ea8emshf5b966be14a2157p16797bjsn37475709ad13",
  //         "X-RapidAPI-Host": "booking-com13.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       setResponseData(response.data);
  //       console.log(responseData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div>
        <div className="mt-2 w-full bg-blue-500 h-96 text-white font-bold text-sm ">
          <div className="flex pt-16 pl-20 ">
            <div
              className={`mr-2 p-2 cursor-pointer ${
                way === "oneway"
                  ? "bg-white text-blue-700 rounded-xl"
                  : "hover:bg-white hover:text-blue-700 hover:rounded-xl"
              }`}
              onClick={() => {
                setWay("oneway");
              }}
            >
              One Way
            </div>
            <div
              className={`mr-2 p-2 cursor-pointer ${
                way === "roundtrip"
                  ? "bg-white text-blue-700 rounded-xl"
                  : "hover:bg-white hover:text-blue-700 hover:rounded-xl"
              }`}
              onClick={() => {
                setWay("roundtrip");
              }}
            >
              Round Trip
            </div>
            <div
              className={`mr-2 p-2 cursor-pointer ${
                way === "multicity"
                  ? "bg-white text-blue-700 rounded-xl"
                  : "hover:bg-white hover:text-blue-700 hover:rounded-xl"
              }`}
              onClick={() => {
                setWay("multicity");
              }}
            >
              Multicity
            </div>
          </div>
          <div>
            {way == "oneway" && (
              <div className="bg-white h-[100px] w-[90%] flex items-center mt-2 ml-20 rounded-lg text-black">
                hello
              </div>
            )}
          </div>

          {way == "oneway" && (
            <div className="mt-6 ml-20 flex justify-between w-[90%]">
              <div>
                <label className="inline-flex items-center cursor-pointer mr-6">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedOption === "Defence Forces"}
                    onChange={() => handleOptionChange("Defence Forces")}
                  />
                  <span className="ml-2 text-white">Defence Forces</span>
                </label>
                <label className="inline-flex items-center cursor-pointer mr-6">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedOption === "Students"}
                    onChange={() => handleOptionChange("Students")}
                  />
                  <span className="ml-2 text-white">Students</span>
                </label>
                <label className="inline-flex items-center cursor-pointer mr-6">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedOption === "Senior Citizens"}
                    onChange={() => handleOptionChange("Senior Citizens")}
                  />
                  <span className="ml-2 text-white">Senior Citizens</span>
                </label>
                <label className="inline-flex items-center cursor-pointer mr-6">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedOption === "Doctors Nurses"}
                    onChange={() => handleOptionChange("Doctors Nurses")}
                  />
                  <span className="ml-2 text-white">Doctors Nurses</span>
                </label>
                <label className="inline-flex items-center cursor-pointer mr-6">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedOption === ""}
                    onChange={() => handleOptionChange("")}
                  />
                  <span className="ml-2 text-white">Not applicable</span>
                </label>
              </div>
              <div className="text-white font-semibold border-1-white bg-blue-400 h-10 w-40 flex justify-center items-center outline-1 ">
                <FaCheck className="inline-block mr-1" /> Web Check In
              </div>
            </div>
          )}
        </div>
        {/* //booking cards */}
      </div>
    </>
  );
};

export default FlightsCard;
