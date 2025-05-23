import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg m-5">
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold text-white">React-Redux</h4>

            <div className="flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-blue-200 transition duration-300 text-lg font-semibold">
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link
                    to="/read"
                    className="text-white hover:text-blue-200 transition duration-300 text-lg font-semibold">
                    All Post ({allusers.length})
                  </Link>
                </li>
              </ul>

              <div className="relative">
                <input
                  className="pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-72 bg-white text-gray-700 placeholder-gray-400 transition duration-300"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                />
                <svg
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="20"
                  height="20">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16a7 7 0 100-14 7 7 0 000 14zm7 0l4 4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
