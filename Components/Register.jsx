import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "./Firebase";
// import { ImYoutube2 } from "react-icons/im";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  // handle submit...>>
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError(`Malumot to'liq emas.`);
      return;
    }
    if (password !== confirm) {
      setError(`confirm va password moskelmadi!!!`);
      return;
    }
    console.log(email, confirm, password);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(email, confirm, password);
    } catch (error) {
      setError(error);
      console.log(email, confirm, password);
    }
    setEmail("");
    setPassword("");
    setConfirm("");
    setError("");
    console.log(email, confirm, password);
  };
  // <<...
  return (
    <div
      className={` flex flex-col items-center justify-center min-h-screen bg-darkbg text-whitetext`}>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-3xl">Register</h1>
        <span>{error}</span>
        <form
          onSubmit={handleSubmit}
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
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="border-2 px-6 py-1 rounded-xl text-blacktext outline-none"
            type="password"
            placeholder="Confirm password..."
          />
          <button className="border-2 px-4 py-1 rounded-xl" type="submit">
            Submit
          </button>{" "}
        </form>
        <Link to="/login">Login ...</Link>
      </div>
    </div>
  );
}

export default Register;
