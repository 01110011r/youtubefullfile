import React, { useContext } from "react";
import Navbar from "./Navbar";
import { MyContext } from "./Contextbox";
import { useParams } from "react-router-dom";

function Singlepage() {
  const { darkmod, fetchData } = useContext(MyContext);
  const { id } = useParams();
  return (
    <div
      className={`min-h-screen ${
        darkmod
          ? "bg-darkbg delay-200 text-whitetext"
          : "bg-mainbg delay-200 text-blacktext"
      }`}>
      <div className="container">
        <Navbar />
        <div className="md:flex gap-3">
          <div className="flex flex-col grow">
            <div className="py-4 ps-4">
              <iframe
                width="100%"
                height="600"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              <div></div>
            </div>
            <div>Singlepage</div>
          </div>
          <div className="flex flex-wrap items-center flex-col pt-4 gap-6">
            {fetchData}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlepage;
