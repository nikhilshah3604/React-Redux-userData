import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailsSlice";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div className="p-8 bg-gradient-to-r from-red-500 to-red-400 min-h-screen">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Fill the Data</h2>
    <form
      className="max-w-lg mx-auto bg-white shadow-lg rounded-lg px-10 pt-8 pb-10 mb-6 transition-transform transform hover:scale-105 duration-300"
      onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          onChange={getUserData}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          onChange={getUserData}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2">Age</label>
        <input
          type="text"
          name="age"
          className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          onChange={getUserData}
          required
        />
      </div>
      <div className="mb-6 flex items-center">
        <input
          className="mr-3 leading-tight"
          name="gender"
          value="Male"
          type="radio"
          onChange={getUserData}
          required
        />
        <label className="text-gray-700 text-lg">Male</label>
      </div>
      <div className="mb-6 flex items-center">
        <input
          className="mr-3 leading-tight"
          name="gender"
          value="Female"
          type="radio"
          onChange={getUserData}
        />
        <label className="text-gray-700 text-lg">Female</label>
      </div>
  
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105">
        Submit
      </button>
    </form>
  </div>
  
  );
};

export default Create;
