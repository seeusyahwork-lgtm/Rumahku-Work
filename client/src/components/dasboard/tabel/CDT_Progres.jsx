// CDT_Progres.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiDetail } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import CDI_Progres from "../input/CDI_Progres.jsx";

const CDT_Progres = () => {
  const [progres, setProgres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgres = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("http://localhost:3000/progres");
        console.log("Data progres:", response.data);
        setProgres(response.data.data || []);
      } catch (err) {
        console.error("Error fetch progres:", err);
        setError("Gagal mengambil data progres");
      } finally {
        setLoading(false);
      }
    };
    fetchProgres();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Progres</h1>

      {/* Search + Tombol Tambah Progres */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search progres..."
          className="w-full md:w-1/3 px-4 py-2 mb-4 md:mb-0 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tombol untuk buka modal */}
        <button
          className="btn flex items-center gap-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaPlus /> Tambah Progres
        </button>

        {/* 
          Modal tambah progres
          📌 Perubahan penting ada di className="modal-box ..." :
          - Tambahkan max-w-3/4 agar lebar maksimal modal menjadi 75% layar
          - Tambahkan w-3/4 agar lebar default modal 75% layar juga
        */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-3/4 max-w-3/4">
            {/* Tombol untuk menutup modal */}
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            {/* Isi form tambah progres */}
            <CDI_Progres />
          </div>
        </dialog>
      </div>

      {/* Tabel Progres */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Proyek ID</th>
              <th className="py-3 px-6 text-left">Tanggal</th>
              <th className="py-3 px-6 text-left">Deskripsi</th>
              <th className="py-3 px-6 text-left">Foto</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 text-sm">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-red-500">
                  {error}
                </td>
              </tr>
            ) : progres.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Tidak ada data
                </td>
              </tr>
            ) : (
              progres.map((p, index) => (
                <tr
                  key={p.id || index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{p.proyek_id || "—"}</td>
                  <td className="py-3 px-6">
                    {p.tanggal
                      ? new Date(p.tanggal).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="py-3 px-6">{p.deskripsi || "—"}</td>
                  <td className="py-3 px-6">{p.foto || "—"}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CDT_Progres;
