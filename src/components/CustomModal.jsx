import React from "react";
import { useSelector } from "react-redux";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.find((ele) => ele.id === id);

  if (!singleUser) return null; // If no user is found, return null

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          X
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {singleUser.name}
        </h2>
        <h3 className="text-lg text-gray-600 mb-4">{singleUser.email}</h3>
        <h4 className="text-md text-gray-500 mb-4">Age: {singleUser.age}</h4>
        <p className="text-md text-gray-500 mb-4">
          Gender: {singleUser.gender}
        </p>

        {/* You can add more fields here if needed */}
      </div>
    </div>
  );
};

export default CustomModal;
