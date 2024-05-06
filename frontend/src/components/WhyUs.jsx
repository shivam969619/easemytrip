import React from "react";
import india from "../assets/indian.png";
import flight from "../assets/FLIGHTS.jpg";

const WhyUs = () => {
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-center items-center">
          <img className="h-6 w-8" src={india} alt="India" />
          <div className="font-bold text-3xl px-4">Why Book With Us?</div>
          <img className="h-6 w-8" src={india} alt="India" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-auto max-w-7xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img src={flight} alt="Flight" className="mx-auto mb-4" />
            <div className="font-bold text-xl mb-2">{feature.title}</div>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 max-w-4xl mx-auto">
        <div className="font-bold text-3xl mb-4">
          Search Flights, Hotels, Bus and Holiday Packages
        </div>
        <p className="text-lg text-gray-800 leading-relaxed">
          EaseMyTrip is one of the largest online travel platforms in India, and
          a trusted name in the Indian travel industry. We offer "end to end"
          travel solutions including air tickets, hotel booking, cab and bus
          booking, train tickets and holiday packages. Additionally, we offer
          ancillary value-added services. We understand that planning a trip can
          be overwhelming, so we have simplified the process to make it easy for
          you to find the perfect travel deals that suit your needs. Our website
          is user-friendly and provides a wide range of options to choose from.
          Whether you're planning a family vacation, a solo adventure, or a
          business trip, we have you covered with our comprehensive travel
          packages. From flights to hotels, car rentals to holiday packages, we
          offer everything you need to make your trip a success. We believe in
          transparency and honesty in all our dealings. We do not charge any
          hidden fees, and our prices are always competitive. With EaseMyTrip,
          you can be assured of getting the best travel deals in the market. If
          you're looking for a hassle-free and affordable way to plan your next
          trip, look no further than EaseMyTrip. We promise to make your travel
          experience a memorable one.
        </p>
      </div>
    </>
  );
};

const features = [
  {
    title: "Easy Booking",
    description:
      "We offer easy and convenient flight bookings with attractive offers.",
  },
  {
    title: "Convenient Services",
    description:
      "Enjoy hassle-free services and excellent customer support for a seamless experience.",
  },
  {
    title: "Best Deals",
    description:
      "Find the best deals and discounts on flights, hotels, and more.",
  },
  {
    title: "Lowest Price",
    description:
      "Get the lowest prices guaranteed on flights, hotels, and holiday packages.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated customer support team is available 24/7 to assist you with any queries or concerns.",
  },
  {
    title: "Exciting Deals",
    description:
      "Discover exciting deals and offers on flights, hotels, and travel packages.",
  },
];

export default WhyUs;
