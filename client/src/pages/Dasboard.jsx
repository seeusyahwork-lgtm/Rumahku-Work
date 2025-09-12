import React, { useState } from 'react';
import { FaUserTie, FaClipboardUser, FaRegUser, FaBarsProgress } from "react-icons/fa6";
import { MdConstruction, MdDataset } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

// Import semua komponen yang akan diganti
import CDT_Konsumen from '../components/dasboard/tabel/CDT_Konsumen';
import CDT_Proyek from '../components/dasboard/tabel/CDT_Proyek';
import CDT_Pengawas from '../components/dasboard/tabel/CDT_Pengawas';
import CDT_Mandor from '../components/dasboard/tabel/CDT_Mandor';
import CDT_Progres from '../components/dasboard/tabel/CDT_Progres';

const Dasboard = () => {
  // State untuk menampung komponen aktif
  const [activeComponent, setActiveComponent] = useState('konsumen');

  // Fungsi untuk render konten utama
  const renderComponent = () => {
    switch (activeComponent) {
      case 'proyek': return <CDT_Proyek />;
      case 'progres': return <CDT_Progres />;
      case 'pengawas': return <CDT_Pengawas />;
      case 'mandor': return <CDT_Mandor />;
      case 'konsumen':
      default: return <CDT_Konsumen />;
    }
  }

  return (
    <div className='grid gap-2 p-4 grid-cols-[250px_minmax(900px,_1fr)] max-h-auto'>

      {/* Sidebar */}
      <div className='container max-h-[calc(100vh-32px)]'>
        <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
          <div className='flex flex-col gap-2'>
            {/* Wadah akunToggle */}
            <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
              <button className="flex p-0.5 hover:bg-stone-300 hover:text-black rounded transition-colors relative gap-2 w-full items-center">
                <img
                  src="https://api.dicebear.com/9.x/croodles/svg?seed=Brian"
                  alt="avatar"
                  className="size-8 round shrink-0 bg-teal-600 shadow"
                />
                <div className="text-start">
                  <span className="text-sm font-semibold block">Bpk. Suparno.SH</span>
                  <span className="text-sm font-bold block text-stone-400">
                    Suparno@gmail.com
                  </span>
                </div>
                <FiChevronDown className="absolute right-2 top-1/2 translate-y-[-50%] text-xs" />
              </button>
            </div>

            {/* Menu Sidebar */}
            <div>
              {/* Menu Sidebar */}
              <ul className="menu bg-base-200 rounded-box w-56">
                <li>
                  <details open>
                    <summary><MdConstruction /> Proyek</summary>
                    <ul>
                      <li>
                        <button
                          onClick={() => setActiveComponent('proyek')}
                          className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded
              ${activeComponent === 'proyek' ? 'bg-teal-600 text-white' : 'text-teal-600 hover:underline'}`}
                        >
                          <MdDataset /> Data Proyek
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveComponent('progres')}
                          className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded
              ${activeComponent === 'progres' ? 'bg-teal-600 text-white' : 'text-teal-600 hover:underline'}`}
                        >
                          <FaBarsProgress /> Progres Proyek
                        </button>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent('pengawas')}
                    className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded
        ${activeComponent === 'pengawas' ? 'bg-teal-600 text-white' : 'text-teal-600 hover:underline'}`}
                  >
                    <FaClipboardUser /> Pengawas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent('mandor')}
                    className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded
        ${activeComponent === 'mandor' ? 'bg-teal-600 text-white' : 'text-teal-600 hover:underline'}`}
                  >
                    <FaUserTie /> Mandor
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent('konsumen')}
                    className={`font-medium flex items-center gap-2 w-full px-2 py-1 rounded
        ${activeComponent === 'konsumen' ? 'bg-teal-600 text-white' : 'text-teal-600 hover:underline'}`}
                  >
                    <FaRegUser /> Konsumen
                  </button>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Main */}
      <div className="mt-2">
        <div className="border-b shadow mb-4 mt-2 pb-4 border-stone-300">
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
              <IoLogOutOutline /> Logout
            </button>
          </div>
        </div>

        {/* Konten utama dinamis */}
        {renderComponent()}
      </div>
    </div>
  );
};

export default Dasboard;
