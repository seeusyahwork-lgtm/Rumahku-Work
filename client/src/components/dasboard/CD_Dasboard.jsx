import React from 'react'
import CDT_Proyek from '../tabel/CDT_Proyek';
import { IoLogOutOutline } from "react-icons/io5";


const CD_Dasboard = () => {
  return (
    <div className="container min-h-screen">
      <div className="border-b shadow mb-4 mt-2 pb-4 border-stone-300">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2">
          <div>
            <span className="text-sm font-bold block">Hi, selamat datang</span>
            <span className="text-xs block text-stone-500">
              {new Date().toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
          <button className="btn btn-outline btn-secondary">
            <IoLogOutOutline />
            Logout
          </button>
        </div>
      </div>

      {/* Tabel Proyek */}
      <CDT_Proyek />
    </div>

  )
}

export default CD_Dasboard