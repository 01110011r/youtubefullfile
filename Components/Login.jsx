import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase, { auth } from "./Firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(`Malumot to'liq emas !!!`);
      return;
    } else {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("true ...!");
        setError("");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setError("user topilmadi!");
        } else if (error.code === "auth/wrong-password") {
          setError("parol notogri!");
        } else {
          setError(error.message);
        }
      }
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className={` flex flex-col items-center justify-center min-h-screen bg-darkbg text-whitetext`}>
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="text-3xl">Login </h1>
        {error}
        <form
          onSubmit={submitLogin}
          className="flex flex-col items-center gap-y-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 px-6 py-1 rounded-xl text-blacktext outline-none"
            type="email"
            placeholder="Enret your email..."
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 px-6 py-1 rounded-xl text-blacktext outline-none"
            type="password"
            placeholder="Enter your password..."
          />

          <button className="border-2 px-4 py-1 rounded-xl" type="submit">
            Submit
          </button>
        </form>
        <Link to="/register">Register ...</Link>
      </div>
    </div>
  );
}

export default Login;
