// CDT_Mandor.jsx
import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { BiDetail } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import CDI_Mandor from "../input/CDI_Mandor";

const CDT_Mandor = () => {
  const [mandor, setMandor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMandor = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("http://localhost:3000/mandor");

        console.log("Data mandor:", response.data);
        setMandor(response.data.data || []);
      } catch (err) {
        console.error("Error fetch mandor:", err);
        setError("Gagal mengambil data mandor");
      } finally {
        setLoading(false);
      }
    };

    fetchMandor();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Mandor</h1>

      {/* Search + Tambah */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search mandor..."
          className="w-full md:w-1/3 px-4 py-2 mb-4 md:mb-0 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="btn flex items-center gap-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaPlus /> Tambah Mandor
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <CDI_Mandor />
          </div>
        </dialog>
      </div>

      {/* Tabel Mandor */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Telepon</th>
              <th className="py-3 px-6 text-left">Alamat</th>
              <th className="py-3 px-6 text-left">Foto</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Tanggal Gabung</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 text-sm">
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center py-4">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="9" className="text-center py-4 text-red-500">{error}</td>
              </tr>
            ) : mandor.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-4">Tidak ada data</td>
              </tr>
            ) : (
              mandor.map((m, index) => (
                <tr key={m.id || index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{m.nama || "—"}</td>
                  <td className="py-3 px-6">{m.email || "—"}</td>
                  <td className="py-3 px-6">{m.telepon || "—"}</td>
                  <td className="py-3 px-6">{m.alamat || "—"}</td>
                  <td className="py-3 px-6">{m.foto || "—"}</td>
                  <td className="py-3 px-6">{m.status || "—"}</td>
                  <td className="py-3 px-6 text-center">
                    {m.tanggal_gabung
                      ? new Date(m.tanggal_gabung).toLocaleDateString()
                      : "—"}
                  </td>
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

      {/* Pagination statis */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-700">
          Showing 1 to {mandor.length} of {mandor.length} entries
        </span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CDT_Mandor;
