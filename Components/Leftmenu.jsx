import React, { useContext, useState } from "react";
import "../app.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutubeSquare } from "react-icons/fa";
import { MyContext } from "./Contextbox";
import { BsHouseDoor } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { MdHistoryEdu } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { RxTextAlignBottom } from "react-icons/rx";
import { Link } from "react-router-dom";
function Leftmenu() {
  const { darkmod, hamburger, accardion, hendleRotate } = useContext(MyContext);
  return (
    <div
      className={`fixed z-10 top-0 left-0 pt-16 ms:pt-20 pe-3 min-h-screen left-true delay-200 ${
        darkmod ? "bg-darkbg" : "bg-mainbg"
      }`}>
      <div>
        <ul>
          <li
            className={`flex items-center gap-2 cursor-pointer hover:text-mainred ms:p-0  ${
              darkmod ? "text-whitetext" : "text-blacktext"
            }`}>
            <Link to="/">
              <BsHouseDoor className="my-2" />
            </Link>
            <span
              className={`ms:inline-block hidden ${
                !hamburger ? "ms:hidden" : ""
              }`}>
              Home
            </span>
          </li>
          <li
            className={`flex items-center gap-2 cursor-pointer hover:text-mainred ms:p-0  ${
              darkmod ? "text-whitetext" : "text-blacktext"
            }`}>
            <MdOutlineSubscriptions className="my-2" />{" "}
            <span
              className={`ms:inline-block hidden ${
                !hamburger ? "ms:hidden" : ""
              }`}>
              Subscriptions
            </span>
          </li>
          <li
            className={`flex items-center gap-2 cursor-pointer hover:text-mainred ms:p-0  ${
              darkmod ? "text-whitetext" : "text-blacktext"
            }`}>
            <BiTime className="my-2" />{" "}
            <span
              className={`ms:inline-block hidden ${
                !hamburger ? "ms:hidden" : ""
              }`}>
              Watch later
            </span>
          </li>
          <li
            className={`flex items-center gap-2 cursor-pointer hover:text-mainred ms:p-0 ${
              darkmod ? "text-whitetext" : "text-blacktext"
            }`}>
            <MdHistoryEdu className="my-2" />{" "}
            <span
              className={`ms:inline-block hidden ${
                !hamburger ? "ms:hidden" : ""
              }`}>
              History
            </span>
          </li>
          <li
            className={`flex items-center gap-2 cursor-pointer hover:text-mainred ms:p-0  ${
              darkmod ? "text-whitetext" : "text-blacktext"
            }`}>
            <CiMusicNote1 className="my-2" />{" "}
            <span
              className={`ms:inline-block hidden ${
                !hamburger ? "ms:hidden" : ""
              }`}>
              Music
            </span>
          </li>
          <li
            className={`flex items-center gap-2 cursor-pointer hover:text-mainred ms:p-0 ${
              darkmod ? "text-whitetext" : "text-blacktext"
            }`}>
            <TbDeviceGamepad2 className="my-2" />{" "}
            <span
              className={`ms:inline-block hidden ${
                !hamburger ? "ms:hidden" : ""
              }`}>
              Games
            </span>
          </li>
        </ul>
      </div>
      <div
        className={` mt-9  ms:inline-block hidden ${
          !hamburger ? "ms:hidden" : ""
        } ${darkmod ? "text-whitetext" : "text-blacktext"}`}>
        <div className="flex items-center gap-x-2 py-3 cursor-pointer">
          <h5>Subscriptions</h5>
          <RxTextAlignBottom onClick={hendleRotate} />
        </div>
        <ul className={!accardion ? "hidden delay-200" : "delay-200"}>
          <li className="flex items-center gap-2 py-1 cursor-pointer">
            <BsPersonCircle />
            <span>Username</span>
          </li>
          <li className="flex items-center gap-2 py-1 cursor-pointer">
            <BsPersonCircle />
            <span>Username</span>
          </li>
          <li className="flex items-center gap-2 py-1 cursor-pointer">
            <BsPersonCircle />
            <span>Username</span>
          </li>
          <li className="flex items-center gap-2 py-1 cursor-pointer">
            <BsPersonCircle />
            <span>Username</span>
          </li>
          <li className="flex items-center gap-2 py-1 cursor-pointer">
            <BsPersonCircle />
            <span>Username</span>
          </li>
          <li className="flex items-center gap-2 py-1 cursor-pointer">
            <BsPersonCircle />
            <span>Username</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftmenu;
