import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Houm from "./Components/Houm";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Singlepage from "./Components/Singlepage";
import { MyContext } from "./Components/Contextbox";
// import Shorts from "./Components/Shorts";

function Router() {
  const user = useContext(MyContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Houm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/single/:id"
          element={user ? <Singlepage /> : <Navigate to="/register" />}
        />
        {/* <Route path="/shorts" element={<Shorts />} /> */}
      </Routes>
    </div>
  );
}

export default Router;
