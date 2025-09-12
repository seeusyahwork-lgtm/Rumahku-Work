import React, { useState, useEffect } from "react";
import axios from "axios";

const CDI_Proyek = () => {
  // State form input
  const [formData, setFormData] = useState({
    nama_proyek: "",
    lokasi: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    status: "",
    anggaran: "",
    keterangan: "",
    foto: null,
    mandor_id: "",
    pengawas_id: "",
    pemilik_id: ""
  });

  // State untuk dropdown options
  const [mandorList, setMandorList] = useState([]);
  const [pengawasList, setPengawasList] = useState([]);
  const [konsumenList, setKonsumenList] = useState([]);

  // Ambil data dropdown saat komponen pertama kali load
  useEffect(() => {
    axios.get("http://localhost:3000/mandor").then((res) => setMandorList(res.data.data));
    axios.get("http://localhost:3000/pengawas").then((res) => setPengawasList(res.data.data));
    axios.get("http://localhost:3000/konsumen").then((res) => setKonsumenList(res.data.data));
  }, []);

  // Handler untuk input teks/angka/select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler untuk upload file
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, foto: e.target.files[0] }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const res = await axios.post("http://localhost:3000/proyek", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Proyek berhasil ditambahkan!");
      console.log(res.data);

      // Reset form
      setFormData({
        nama_proyek: "",
        lokasi: "",
        tanggal_mulai: "",
        tanggal_selesai: "",
        status: "",
        anggaran: "",
        keterangan: "",
        foto: null,
        mandor_id: "",
        pengawas_id: "",
        pemilik_id: ""
      });

    } catch (err) {
      console.error(err);
      alert("❌ Gagal menambahkan proyek!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-10">
        <h2 className="text-xl font-bold text-gray-900">Tambah Proyek Baru</h2>
        <p className="text-sm text-gray-600">
          Isi semua data proyek di bawah ini. Upload file DWG/PDF jika ada.
        </p>

        {/* Nama Proyek */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Nama Proyek</label>
          <input
            type="text"
            name="nama_proyek"
            value={formData.nama_proyek}
            onChange={handleChange}
            placeholder="Perumahan Sakura"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          />
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Lokasi</label>
          <input
            type="text"
            name="lokasi"
            value={formData.lokasi}
            onChange={handleChange}
            placeholder="Jl. Melati No.10, Jakarta"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          />
        </div>

        {/* Tanggal mulai & selesai */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Tanggal Mulai</label>
            <input
              type="date"
              name="tanggal_mulai"
              value={formData.tanggal_mulai}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Tanggal Selesai</label>
            <input
              type="date"
              name="tanggal_selesai"
              value={formData.tanggal_selesai}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          >
            <option value="">--Pilih Status--</option>
            <option value="Sedang Berjalan">Sedang Berjalan</option>
            <option value="Selesai">Selesai</option>
            <option value="Tertunda">Tertunda</option>
          </select>
        </div>

        {/* Anggaran */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Anggaran (Rp)</label>
          <input
            type="number"
            name="anggaran"
            value={formData.anggaran}
            onChange={handleChange}
            placeholder="500000000"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          />
        </div>

        {/* Keterangan */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Keterangan</label>
          <textarea
            name="keterangan"
            value={formData.keterangan}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            placeholder="Deskripsi proyek..."
          />
        </div>

        {/* Upload Foto */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Upload Gambar/Foto</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full"
          />
        </div>

        {/* Dropdown Mandor, Pengawas, Pemilik */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Mandor</label>
            <select
              name="mandor_id"
              value={formData.mandor_id}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            >
              <option value="">--Pilih Mandor--</option>
              {mandorList.map((m) => (
                <option key={m.id} value={m.id}>{m.nama}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">Pengawas</label>
            <select
              name="pengawas_id"
              value={formData.pengawas_id}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            >
              <option value="">--Pilih Pengawas--</option>
              {pengawasList.map((p) => (
                <option key={p.id} value={p.id}>{p.nama}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">Pemilik/Konsumen</label>
            <select
              name="pemilik_id"
              value={formData.pemilik_id}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            >
              <option value="">--Pilih Konsumen--</option>
              {konsumenList.map((k) => (
                <option key={k.id} value={k.id}>{k.nama}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tombol submit */}
        <div className="flex justify-end gap-4">
          <button
            type="reset"
            onClick={() => setFormData({
              nama_proyek: "",
              lokasi: "",
              tanggal_mulai: "",
              tanggal_selesai: "",
              status: "",
              anggaran: "",
              keterangan: "",
              foto: null,
              mandor_id: "",
              pengawas_id: "",
              pemilik_id: ""
            })}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default CDI_Proyek;
