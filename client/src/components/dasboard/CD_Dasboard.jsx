import React from 'react'
import CTD_Proyek from "./tabel/CDT_Proyek";
import { IoLogOutOutline } from "react-icons/io5";


const CD_Dasboard = () => {
  return (
    <div className='container max-h-[calc(100vh-32px)]'>
    <div className='border-b  mb-4 mt-2 pb-4 border-stone-300 shadow h-auto text-black' >
      <div className="w-full border-b px-4 ml-5 mb-4 mt-2 pb-4 border-stone-300">
        <div className="flex justify-between p-0.5">
          <div>
            <span className="text-sm font-bold block">hii, selamat datang </span>
            <span className="text-xs block text-stone-500">
              {" "}
              Jumat, agustus 6th 2025
            </span>
          </div>
          <div className="place-self-end">
            <button className="btn btn-soft btn-secondary">
              {" "}
              <IoLogOutOutline />
              Logout
            </button>
          </div>
        </div>
      </div>

      <CTD_Proyek />
    </div>
    </div>
  )
}

export default CD_Dasboard