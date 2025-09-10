import React from 'react'
import { BiDetail } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import CDI_Proyek from '../input/CDI_Proyek';

const CDT_Proyek = () => {
    return (
        <div><meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Proyek User Listing Table</title>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8"> Daftar Proyek</h1>
                {/* Search and Add User (Static) */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}> <FaPlus />Tambah Proyek Baru</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <CDI_Proyek />
                        </div>
                    </dialog>
                </div>


                {/* User Table */}
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Proyek</th>
                                <th className="py-3 px-6 text-left">User Name</th>
                                <th className="py-3 px-6 text-left">Petugas</th>
                                <th className="py-3 px-6 text-left">Mandor</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">1</td>
                                <td className="py-3 px-6 text-left">Indah Permata</td>
                                <td className="py-3 px-6 text-left">Rahmat Saepuloh</td>
                                <td className="py-3 px-6 text-left">Doni Ramadan</td>
                                <td className="py-3 px-6 text-left">Cecep Rafai</td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" >
                                            <BiDetail />
                                        </button>
                                        <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                />
                                            </svg>
                                        </button>
                                        <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>

                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                {/* Static Pagination */}
                <div className="flex justify-between items-center mt-6">
                    <div>
                        <span className="text-sm text-gray-700">
                            Showing 1 to 5 of 5 entries
                        </span>
                    </div>
                    <div className="flex space-x-2">
                        <a href="https://abhirajk.vercel.app/" target="blank">
                            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                                Previous
                            </button>
                        </a>
                        <a href="https://abhirajk.vercel.app/" target="blank">
                            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                                Next
                            </button>
                        </a>
                    </div>
                </div>
            </div></div>
    )
}

export default CDT_Proyek