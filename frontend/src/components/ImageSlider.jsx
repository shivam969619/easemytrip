import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const ImageSlider = ({ option }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);
  const array = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zT6ZxxBG3H7Zux4xSbz6YZU154AY5fSRVw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WtCJ2wxJpMVjOp_JH4tZiCr_z-YpCAKUkw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHZwtx2jbZsB3eEeNkOjJH1NiSGzam5VO4Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_csksWMD2W17UQ0XWp2Zloia2VVYjz4rDGg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHZwtx2jbZsB3eEeNkOjJH1NiSGzam5VO4Q&s",
    "https://www.easemytrip.com/images/offer-img/hdfc-bank-31mar23-lp3.png",
    "https://www.easemytrip.com/images/offer-img/hdfc-debit-30sep22-lp2.png",
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === array.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? array.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const resizeListener = () => {
      // Check if sliderRef.current is not null to avoid errors during initialization
      if (sliderRef.current) {
        // Calculate the number of visible images based on the width of the container
        const containerWidth = sliderRef.current.offsetWidth;
        const imageWidth = 300; // Assuming each image has a fixed width of 300px
        const numVisibleImages = Math.floor(containerWidth / imageWidth);

        // Update the currentImageIndex to show the first image in the visible set
        if (numVisibleImages < array.length) {
          setCurrentImageIndex(0);
        }
      }
    };

    // Add resize event listener
    window.addEventListener("resize", resizeListener);

    // Call resizeListener once to initialize
    resizeListener();

    // Remove resize event listener on component unmount
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [array.length]); // Dependency array to run effect when array.length changes

  return (
    <>
      <div className="relative mt-10" ref={sliderRef}>
        <IoIosArrowRoundForward
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-gray-500 cursor-pointer color-blue"
        />
        <div className="flex overflow-hidden justify-between">
          {array.map((image, index) => (
            <div
              key={index}
              className={`w-96 h-60 pl-4 pr-4 ${
                index < currentImageIndex || index >= currentImageIndex + 3
                  ? "hidden"
                  : ""
              } transition-opacity duration-500`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Save huge on travel booking
              </div>
            </div>
          ))}
        </div>
        <IoArrowBack
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-gray-500 cursor-pointer"
        />
      </div>
      <div className="mt-6 w-full flex justify-center items-center">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 font-semibold">
          View All Offers
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
