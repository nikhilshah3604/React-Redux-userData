import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-blue-300">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Edit the Data
      </h2>
      <form
        className="w-full max-w-lg mx-auto bg-pink-400 shadow-lg rounded-lg p-8"
        onSubmit={handleUpdate}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={updateData && updateData.name}
            onChange={newData}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={updateData && updateData.email}
            onChange={newData}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={updateData && updateData.age}
            onChange={newData}
            required
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            className="form-radio text-blue-500 focus:ring-blue-400"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="ml-2 text-gray-700 text-sm">Male</label>
        </div>

        <div className="mb-6 flex items-center">
          <input
            className="form-radio text-blue-500 focus:ring-blue-400"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="ml-2 text-gray-700 text-sm">Female</label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
