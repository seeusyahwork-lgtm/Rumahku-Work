import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";


const TopHeader = () => {
  return (
    <div className="container m-auto">
      <div className=" fixed top-0 right-0 left-0 h-10 m-auto ">
        <div className="navbar bg-base-100 shadow-sm ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Timeline</a>
                </li>
                <li>
                  <a>footer</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center m-auto">
            <img
              src="../../src/assets/rumahku-kontruksi-high-resolution-logo-transparent.png"
              className="w-40"
            ></img>
          </div>
          <div className="navbar-end ">
            <button className="btn btn-soft btn-info mr-5">
              {" "}
              <LuInfo />
              Info
            </button>
            <button className="btn btn-soft btn-secondary">
              {" "}
              <IoLogOutOutline />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;