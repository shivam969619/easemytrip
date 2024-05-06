import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Top from "./Top";
const Home = () => {
  return (
    <>
      <Navbar />
      <Top />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
