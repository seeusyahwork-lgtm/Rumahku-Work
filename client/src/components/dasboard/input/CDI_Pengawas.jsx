import React, { useState } from 'react';
import axios from 'axios';

const CDI_Pengawas = () => {
  // State untuk input form
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    sertifikat: '',
    foto: '',
  });

  const [loading, setLoading] = useState(false);

  // Handler input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/pengawas', formData);
      console.log('Berhasil menambahkan pengawas:', res.data);

      alert('Pengawas berhasil ditambahkan!');
      setFormData({
        nama: '',
        email: '',
        telepon: '',
        alamat: '',
        sertifikat: '',
        foto: '',
      });
    } catch (err) {
      console.error('Gagal menambahkan pengawas:', err);
      alert('Terjadi kesalahan saat menyimpan data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        className="px-4 md:px-6 max-w-4xl mx-auto py-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Tambah Pengawas Baru
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Isi data pengawas berikut agar dapat ditambahkan ke daftar pengawas.
        </p>

        {/* Nama */}
        <div className="mb-4">
          <label htmlFor="nama" className="block text-sm font-medium text-gray-900">
            Nama Pengawas
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            required
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
            required
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
            required
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
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        {/* Sertifikat */}
        <div className="mb-4">
          <label htmlFor="sertifikat" className="block text-sm font-medium text-gray-900">
            Sertifikat
          </label>
          <input
            type="text"
            name="sertifikat"
            id="sertifikat"
            value={formData.sertifikat}
            onChange={handleChange}
            placeholder="Contoh: Sertifikat K3"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        {/* Foto */}
        <div className="mb-6">
          <label htmlFor="foto" className="block text-sm font-medium text-gray-900">
            URL Foto
          </label>
          <input
            type="text"
            name="foto"
            id="foto"
            value={formData.foto}
            onChange={handleChange}
            placeholder="Contoh: https://example.com/foto.jpg"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Masukkan link foto pengawas (opsional).
          </p>
        </div>

        {/* Tombol aksi */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={() => document.getElementById('my_modal_3')?.close()}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CDI_Pengawas;
