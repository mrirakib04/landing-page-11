import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";
import bg from "./../assets/images/1.png";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="container w-full px-5 flex flex-col items-center">
      <nav className="w-full flex items-center justify-between gap-3 py-5">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleNav}
            className="relative md:hidden block text-2xl"
          >
            <PiListBold></PiListBold>
          </button>
          {showNav && (
            <ul className="md:hidden flex-col p-5 border-2 rounded-2xl bg-gray-100 items-start gap-3 text-lg font-medium flex absolute top-16 left-3">
              <li>
                <a
                  className="text-gray-700 hover:text-red-500 duration-300"
                  href="./../../index.html"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-red-500 duration-300"
                  href="#About"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-red-500 duration-300"
                  href="#Pages"
                >
                  Pages
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-red-500 duration-300"
                  href="#Blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-red-500 duration-300"
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
          <a
            className="flex items-center md:text-3xl text-xl font-bold"
            href="./../../index.html"
          >
            <h2>
              Hockeys<span className="text-red-500">'</span>s
            </h2>
          </a>
        </div>

        <ul className="md:flex p-5 items-start gap-5 text-lg font-medium hidden">
          <li>
            <a
              className="text-gray-700 hover:text-red-500 duration-300"
              href="./../../index.html"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-red-500 duration-300"
              href="#About"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-red-500 duration-300"
              href="#Pages"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-red-500 duration-300"
              href="#Blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-red-500 duration-300"
              href="#Contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <button className="text-gray-700 hover:text-red-500 duration-300 text-xl md:block hidden">
            <FaSearch></FaSearch>
          </button>
          <button className="font-semibold bg-red-500 text-white md:text-lg text-base hover:bg-black duration-300 py-1 px-4 rounded-xl">
            Get Ticket
          </button>
        </div>
      </nav>
      <div
        className="w-full rounded-xl pb-5 px-5 lg:pt-80 md:pt-60 sm:pt-40 pt-28"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
      >
        <div className="flex items-end sm:justify-between justify-center">
          <div className="flex items-center gap-5">
            <button className="p-3 rounded-full bg-black text-white text-xl hover:bg-white hover:text-black">
              <IoArrowBack></IoArrowBack>
            </button>
            <button className="p-3 rounded-full bg-black text-white text-xl hover:bg-white hover:text-black">
              <IoArrowForward></IoArrowForward>
            </button>
          </div>
          <div className="p-3 rounded-xl bg-black text-white md:max-w-md sm:max-w-sm sm:block hidden">
            <h3 className="text-xl font-medium">
              Meet all the heroes from the field
            </h3>
            <p className="text-gray-300 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              in rem consequatur ex animi officia quo sunt voluptatem eius est.
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 rounded-xl mt-5 bg-black text-white sm:hidden block">
        <h3 className="sm:text-xl text-base font-medium">
          Meet all the heroes from the field
        </h3>
        <p className="sm:text-base text-sm text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in
          rem consequatur ex animi officia quo sunt voluptatem eius est.
        </p>
      </div>
    </div>
  );
};

export default Header;
