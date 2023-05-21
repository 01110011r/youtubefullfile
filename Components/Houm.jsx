import React, { useContext } from "react";
import Leftmenu from "./Leftmenu";
import { MyContext } from "./Contextbox";
import Loader from "./Loader";
import Navbar from "./Navbar";
import ShortsApp from "./Shorts";

function Houm() {
  const { darkmod, fetchData, loader, hamburger } = useContext(MyContext);

  console.log(fetchData);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className={darkmod ? "bg-darkbg delay-200" : "bg-mainbg delay-200"}>
      <div className={`container relative`}>
        <Navbar />
        <div className="flex flex-wrap pt-5">
          <Leftmenu />
          <div className={`container flex flex-wrap`}>
            <ShortsApp />
          </div>

          <div
            className={`flex flex-wrap mt-7 ${
              hamburger ? "ms:ps-32" : ""
            } justify-around items-center gap-y-8 ${
              darkmod ? "text-whitetext" : "text-blacktext"
            } ps-3`}>
            {fetchData}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Houm;
