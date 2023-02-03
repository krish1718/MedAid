import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <div className="sticky top-0 z-20 bg-white">
      <header className="text-gray-600 body-font shadow-xl">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img className="w-[120px]" src={logo} alt="" />
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/userprofile"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Profile
            </NavLink>
            <NavLink
              to="/donate"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Donate
            </NavLink>
            <NavLink
              to="/volunteer"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Volunteer
            </NavLink>
            <NavLink
              to="/ngo"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              NGOs
            </NavLink>
            <NavLink
              to="/home"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Community
            </NavLink>
            <NavLink
              to="/contact"
              className="mr-5 hover:text-orange-600 text-green-600"
            >
              Contact Us
            </NavLink>
          </nav>
          {clicked ? <NavLink
            // to="/contact"
            to="/login"
            className="inline-flex transition ease-in items-center text-white bg-green-600 border-0 py-1 pl-3 pr-2 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0"
            onClick={() => setClicked(!clicked)}
          >
            Login
          </NavLink>: <NavLink
            to="/"
            onClick={() => setClicked(!clicked)}
            className="inline-flex transition ease-in items-center text-white bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0"
          >
            Logout
            
          </NavLink>}
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header;
