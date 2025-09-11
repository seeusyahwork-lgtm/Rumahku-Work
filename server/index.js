//index.js

const express = require('express');
const app = express();
const PORT = 3000;

const pool = require('./db'); // Import koneksi database

// Middleware parsing JSON
app.use(express.json());

// Route utama
// app.get('/', (req, res) => {
//   res.send('Server berjalan');
// });

// Route untuk cek koneksi database
app.get('/cekkoneksi', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'Berhasil terhubung ke database ✅',
      waktu_server_db: result.rows[0].now
    });
  } catch (error) {
    res.status(500).json({
      status: 'Gagal terhubung ke database ❌',
      error: error.message
    });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



// app.method(path, handler);

app.get('/',(req, res) => {
    res.send('hello get Method');
});

app.post('/',(req, res) => {
    res.send('hello post Method');
});

