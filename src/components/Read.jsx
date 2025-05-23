import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-center text-xl font-semibold">Loading...</h2>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-yellow-500">
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}

      <h2 className="text-3xl font-bold text-gray-800 mb-4">All Data</h2>

      {/* Radio Buttons */}
      <div className="flex items-center space-x-6 mb-6">
        <div className="flex items-center">
          <input
            className="form-radio text-blue-500 focus:ring-blue-400"
            name="gender"
            checked={radioData === ""}
            type="radio"
            onChange={() => setRadioData("")}
          />
          <label className="ml-2 text-lg text-gray-700">All</label>
        </div>

        <div className="flex items-center">
          <input
            className="form-radio text-blue-500 focus:ring-blue-400"
            name="gender"
            checked={radioData === "Male"}
            value="Male"
            type="radio"
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label className="ml-2 text-lg text-gray-700">Male</label>
        </div>

        <div className="flex items-center">
          <input
            className="form-radio text-blue-500 focus:ring-blue-400"
            name="gender"
            value="Female"
            checked={radioData === "Female"}
            type="radio"
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label className="ml-2 text-lg text-gray-700">Female</label>
        </div>
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })
            .map((ele) => (
              <div
                key={ele.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
                <div className="p-4">
                  <h5 className="text-xl font-semibold text-gray-800">
                    {ele.name}
                  </h5>
                  <h6 className="text-md text-gray-600">{ele.email}</h6>
                  <p className="text-sm text-gray-500">{ele.gender}</p>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      className="text-blue-500 hover:text-blue-700 focus:outline-none"
                      onClick={() => [setId(ele.id), setShowPopup(true)]}>
                      View
                    </button>
                    <Link
                      to={`/edit/${ele.id}`}
                      className="text-yellow-500 hover:text-yellow-700 focus:outline-none">
                      Edit
                    </Link>
                    <button
                      onClick={() => dispatch(deleteUser(ele.id))}
                      className="text-red-500 hover:text-red-700 focus:outline-none">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
