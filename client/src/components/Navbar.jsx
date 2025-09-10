import React from 'react'
import { TbLogin2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="navbar fixed bg-white shadow-sm z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Footer</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img
          className="w-35"
          src="../assets/RKK-logo.png"
        />
      </div>
      <div className="navbar-end">

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-accent text-white"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <TbLogin2 /> Sign In
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Sign In Access
                </h1>
                <div className="font-normal">
                  <h2 className="text-center ">
                    {" "}
                    Kamu harus memiliki akun agar bisa login{" "}
                  </h2>
                  <h2 className="text-center "> akun akan di berikan oleh admin</h2>
                </div>
                <h2>
                  <form
                    className="space-y-4 md:space-y-6"
                    method="POST"
                    action="./"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="login"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start"></div>
                      {/* <Link to={'/PUser'}className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500"> */}
                        lupa password?
                        {/* </Link> */}
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-teal-600 py-1.5 px-4 rounded  w-full"
                    >
                      SIGN IN
                    </button>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      Hubungi admin agar admin memberikan akun akses{" "}
                      {/* <Link to="/" className="font-medium text-teal-600 hover:underline dark:text-teal-500"> */}
                      Sign up
                      {/* </Link> */}
                    </p>
                  </form>
                </h2>
              </div>
            </div>
          </div>
        </dialog>

      </div>
    </nav>
  )
}

export default Navbar