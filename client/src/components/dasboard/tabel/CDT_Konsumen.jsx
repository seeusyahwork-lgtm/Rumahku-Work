// CDT_Konsumen.jsx
import React, { useEffect, useState } from "react";
import axios from "axios"; // Axios untuk HTTP request
import { BiDetail } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import CDI_Konsumen from "../input/CDI_Konsumen";

const CDT_Konsumen = () => {
  // -----------------------------
  // State
  // -----------------------------
  const [konsumen, setKonsumen] = useState([]); // Menyimpan daftar konsumen dari API
  const [loading, setLoading] = useState(true); // Menandai apakah data masih loading
  const [error, setError] = useState(null);     // Menyimpan pesan error jika gagal fetch

  // -----------------------------
  // useEffect: ambil data dari API
  // -----------------------------
  useEffect(() => {
    const fetchKonsumen = async () => {
      try {
        setLoading(true);  // mulai loading
        setError(null);    // reset error

        // Axios GET request ke API
        const response = await axios.get("http://localhost:3000/konsumen");

        // Axios otomatis menaruh data JSON di response.data
        // API kita mengirim { message: "...", data: [...] }
        console.log("Data dari API:", response.data); // debug
        setKonsumen(response.data.data || []);        // simpan data ke state
      } catch (err) {
        console.error("Error fetch konsumen:", err);
        setError("Gagal mengambil data konsumen");
      } finally {
        setLoading(false); // hentikan loading
      }
    };

    fetchKonsumen();
  }, []); // dependency [] artinya dijalankan sekali saat pertama render

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Konsumen</h1>

      {/* -----------------------------
          Search Input + Tambah Konsumen
      ----------------------------- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Input pencarian (UI saja, belum fungsional) */}
        <input
          type="text"
          placeholder="Search konsumen..."
          className="w-full md:w-1/3 px-4 py-2 mb-4 md:mb-0 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tombol tambah konsumen */}
        <button
          className="btn flex items-center gap-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaPlus /> Tambah Konsumen Baru
        </button>

        {/* Modal input konsumen */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <CDI_Konsumen />
          </div>
        </dialog>
      </div>

      {/* -----------------------------
          Tabel Konsumen
      ----------------------------- */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Alamat</th>
              <th className="py-3 px-6 text-left">Proyek</th>
              <th className="py-3 px-6 text-left">URL Foto</th>
              <th className="py-3 px-6 text-center">Tanggal Daftar</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 text-sm">
            {/* Jika masih loading */}
            {loading ? (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              // Jika ada error saat fetch
              <tr>
                <td colSpan="8" className="text-center py-4 text-red-500">
                  {error}
                </td>
              </tr>
            ) : konsumen.length === 0 ? (
              // Jika data kosong
              <tr>
                <td colSpan="8" className="text-center py-4">
                  Tidak ada data
                </td>
              </tr>
            ) : (
              // Tampilkan daftar konsumen
              konsumen.map((k, index) => (
                <tr
                  key={k.id || index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{k.nama || "—"}</td>
                  <td className="py-3 px-6">{k.email || "—"}</td>
                  <td className="py-3 px-6">{k.alamat || "—"}</td>
                  <td className="py-3 px-6">{k.proyek || "—"}</td>
                  <td className="py-3 px-6">
                    {/* Tampilkan URL foto sebagai teks */}
                    {k.url_foto || "—"}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {k.tanggal_daftar
                      ? new Date(k.tanggal_daftar).toLocaleDateString()
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

      {/* -----------------------------
          Pagination statis (belum dinamis)
      ----------------------------- */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-700">
          Showing 1 to {konsumen.length} of {konsumen.length} entries
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

export default CDT_Konsumen;
