import React, { useState } from 'react';

const CDI_Mandor = () => {
  // -----------------------------
  // State untuk menyimpan input form
  // -----------------------------
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    proyek: '',
    url_foto: '',
  });

  // -----------------------------
  // Fungsi handle perubahan input
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // Fungsi handle submit form
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data konsumen yang dikirim:', formData);
    // TODO: Kirim data ke API menggunakan axios POST
    // Contoh: axios.post('http://localhost:3000/konsumen', formData)
  };

  return (
    <div>
      {/* Modal diperbesar dengan max-w-4xl */}
      <form
        className="px-4 md:px-6 max-w-4xl mx-auto py-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Tambah Konsumen Baru
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Isi data konsumen berikut agar dapat ditambahkan ke daftar konsumen.
        </p>

        {/* Nama Konsumen */}
        <div className="mb-4">
          <label htmlFor="nama" className="block text-sm font-medium text-gray-900">
            Nama Konsumen
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan nama konsumen"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        {/* Telepon */}
        <div className="mb-4">
          <label htmlFor="telepon" className="block text-sm font-medium text-gray-900">
            Telepon
          </label>
          <input
            type="text"
            name="telepon"
            id="telepon"
            value={formData.telepon}
            onChange={handleChange}
            placeholder="Masukkan nomor telepon"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        {/* Alamat */}
        <div className="mb-4">
          <label htmlFor="alamat" className="block text-sm font-medium text-gray-900">
            Alamat
          </label>
          <textarea
            name="alamat"
            id="alamat"
            value={formData.alamat}
            onChange={handleChange}
            rows={3}
            placeholder="Masukkan alamat lengkap"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        {/* Proyek */}
        <div className="mb-4">
          <label htmlFor="proyek" className="block text-sm font-medium text-gray-900">
            Proyek
          </label>
          <input
            type="text"
            name="proyek"
            id="proyek"
            value={formData.proyek}
            onChange={handleChange}
            placeholder="Nama proyek"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        {/* URL Foto */}
        <div className="mb-6">
          <label htmlFor="url_foto" className="block text-sm font-medium text-gray-900">
            URL Foto
          </label>
          <input
            type="text"
            name="url_foto"
            id="url_foto"
            value={formData.url_foto}
            onChange={handleChange}
            placeholder="Contoh: https://example.com/foto.jpg"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Masukkan link foto konsumen, akan ditampilkan di tabel.
          </p>
        </div>

        {/* Tombol aksi */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={() => document.getElementById('my_modal_3').close()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CDI_Mandor;
