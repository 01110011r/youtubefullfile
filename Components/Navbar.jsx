import React, { createContext, useContext, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutubeSquare } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MyContext } from "./Contextbox";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    hamburger,
    hendleHamburger,
    darkmod,
    hendleDarkmod,
    user,
    handleAccount,
    account,
  } = useContext(MyContext);
  return (
    <div
      className={`sticky top-0 right-0 left-0 z-20 ${
        darkmod ? "bg-darkbg delay-200" : "bg-mainbg delay-200"
      } `}>
      <div
        className={`flex items-center container justify-between py-4 ms:py-6`}>
        <div
          className={`flex items-center gap-x-7 ${
            darkmod ? "text-whitetext " : "text-blacktext"
          }`}>
          <GiHamburgerMenu
            onClick={hendleHamburger}
            className={`ms:inline-block hidden cursor-pointer`}
          />
          <div className={`flex items-center gap-x-0.5 cursor-pointer`}>
            <Link to="/">
              <FaYoutubeSquare className={`mx-px  text-mainred`} />
            </Link>
            <Link to="/">
              <p className="ms:inline-block hidden">YouTube</p>
            </Link>
          </div>
        </div>
        <div
          className={`flex items-center gap-x-3 bg-mainred border-0 border-solid rounded-2xl pe-2 w-5/12  ${
            darkmod ? "text-whitetext " : "text-blacktext"
          }`}>
          <input
            className={`outline-none w-11/12 ps-4 bg-inputfor py-0.5 rounded-s-2xl text-blacktext`}
            type="search"
            placeholder="Search..."
          />
          <HiOutlineSearch className={`xl:ms-2 cursor-pointer`} />
        </div>
        <div
          className={`flex items-center gap-x-2  ${
            darkmod ? "text-whitetext " : "text-blacktext"
          }`}>
          <div className="cursor-pointer" onClick={hendleDarkmod}>
            {!darkmod ? (
              <MdDarkMode className={`text-darkbg`} />
            ) : (
              <MdLightMode />
            )}
          </div>
          <AiOutlineVideoCamera
            className={`ms:inline-block hidden cursor-pointer`}
          />
          <BsBell className={`ms:inline-block hidden cursor-pointer`} />
          <FaRegUserCircle onClick={handleAccount} className="cursor-pointer" />
          <div
            className={`absolute top-11 right-0 flex flex-col gap-x-2 z-10 ${
              account ? "" : "hidden"
            } ${darkmod ? "bg-darkbg" : "bg-mainbg"} rounded-md p-2`}>
            <Link
              // className={`${darkmod ? "bg-darkbg" : "bg-mainbg"} p-2`}
              to="/register">
              Register
            </Link>
            <Link
              // className={`${darkmod ? "bg-darkbg" : "bg-mainbg"} p-2`}
              to="/login">
              Login
            </Link>
            {user ? <button onClick={handleAccount}>Logout</button> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
