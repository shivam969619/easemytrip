import React from "react";
import FlightsCard from "./FlightsCard";
import HotelsCard from "./HotelsCard";
import HotelFlightsCard from "./HotelFlightsCard";
import Trains from "./Trains";
import Bus from "./Bus";
import Holidays from "./Holidays";
import Cabs from "./Cabs";
import Activities from "./Activities";
const Card = ({ value, setValue }) => {
  // Render different cards based on the value
  let cardComponent;
  switch (value) {
    case "flights":
      cardComponent = <FlightsCard />;
      break;
    case "hotels":
      cardComponent = <HotelsCard />;
      break;
    case "hotelsflights":
      cardComponent = <HotelFlightsCard />;
      break;
    case "trains":
      cardComponent = <Trains />;
      break;
    case "bus":
      cardComponent = <Bus />;
      break;
    case "holidays":
      cardComponent = <Holidays />;
      break;
    case "Cabs":
      cardComponent = <Cabs />;
      break;
    case "Activities":
      cardComponent = <Activities />;
      break;
    // Add cases for other values as needed
    default:
      cardComponent = null;
  }

  return <>{cardComponent}</>;
};

export default Card;
