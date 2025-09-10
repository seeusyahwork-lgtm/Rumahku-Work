import React from 'react'
import { FaUserTie } from "react-icons/fa6";
import { FaClipboardUser } from "react-icons/fa6";
import { MdConstruction } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdDataset } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6"; import { Link } from 'react-router-dom'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CD_Sidebar = () => {
    return (
        <div className='container max-h-[calc(100vh-32px)]'>
            <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
                {/* membuat main sidebar kontem  */}
                <div className='flex flex-col gap-2 '>
                    // Wadahnya akunToggle
                    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
                        {/* avatar akunToggle  */}
                        <button className="flex p-0.5 hover:bg-stone-300 hover:text-black rounded transition-colors relative gap-2 w-full items-center">
                            <img
                                src="https://api.dicebear.com/9.x/croodles/svg?seed=Brian"
                                alt="avatar"
                                className="size-8 round shrink-0 bg-teal-600 shadow"
                            ></img>

                            <div className="text-start">
                                <span className="text-sm font-semibold block">Bpk. Suparno.SH</span>
                                <span className="text-sm font-bold block text-stone-400">
                                    Suparno@gmail.com{" "}
                                </span>
                            </div>
                            <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+15px)] text-xs" />
                            <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50-5px)] text-xs" />
                        </button>
                    </div>

                    <div>
                        <ul className="menu bg-base-200 rounded-box w-56">
                            <li>
                                <details open>
                                    <summary> <MdConstruction />Proyek</summary>
                                    <ul>
                                        <li>
                                            <Link to={'/PAdmin'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
                                                <MdDataset />Data Proyek
                                            </Link>

                                        </li>
                                        <li>
                                            <Link to={'/DListProyek'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
                                                <FaBarsProgress />Progres Proyek
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link to={'/DPengawas'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
                                    <FaClipboardUser />Petugas
                                </Link>

                            </li>
                            <li>
                                <Link to={'/DMandor'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
                                    <FaUserTie /> Mandor
                                </Link>
                            </li>
                            <li>
                                <Link to={'/DKonsumen'} className="font-medium text-teal-600 hover:underline dark:text-teal-500">
                                    <FaRegUser />Konsumen
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* membuat : rencanan toggle  */}

        </div>
    )
}

export default CD_Sidebar