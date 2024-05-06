import React from "react";
import logo from "../assets/logo.png";
import { FaRegUserCircle, FaAngleDown } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import call from "../assets/telecaller.jpeg";
import flag from "../assets/flag.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-12 w-auto" src={logo} alt="logo" />
            <div className="ml-4">
              <div className="font-semibold">EMTMate</div>
              <div className="text-sm text-gray-500">Agent travel solution</div>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavItem
              icon={<MdOutlineMailOutline />}
              title="EMTDesk"
              subtitle="Corporate travel program"
            />
            <NavItem
              icon={<MdOutlineMailOutline />}
              title="EMTRoyale"
              subtitle="For Prime Members"
            />
            <NavItem
              icon={<MdOutlineMailOutline />}
              title="Explore Bharat"
              subtitle="A Tour to India"
            />
            <NavItem
              icon={<MdOutlineMailOutline />}
              title="Join EMTPro"
              subtitle="Enjoy More Benefits"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img className="h-6" src={call} alt="" />
              <FaAngleDown className="h-4 w-4" />
              <img className="h-6" src={flag} alt="" />
              <FaAngleDown className="h-4 w-4" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold">
              Login or SignUp
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-px"></div>
    </>
  );
};

const NavItem = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
};

export default Navbar;
