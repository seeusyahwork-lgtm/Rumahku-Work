// Import module
import express from 'express';       // import Express untuk membuat server
import cors from 'cors';             // <-- import CORS middleware untuk mengizinkan request dari client React
import usersRoutes from './routes/users.js';       // import route users
import konsumenRoutes from './routes/konsumen.js'; // import route konsumen
import mandorRoutes from './routes/mandor.js'; // import route mandor
import pengawasRoutes from './routes/pengawas.js'; // import route pengawas
import proyekRoutes from './routes/proyek.js'; // import route pengawas
import progresRoutes from './routes/progres.js'; // import route progres
import loginRoutes from './routes/login.js'; // import route progres
import logReqest from './middlewares/logs.js';     // import middleware logging

// Buat instance Express
const app = express();
const PORT = 3000;

// ----------------------------
// Middleware
// ----------------------------

// Middleware logging
// Semua request ke server akan melalui logReqest terlebih dahulu
app.use(logReqest);

// Middleware untuk parsing JSON
// Agar server bisa menerima request dengan body JSON
app.use(express.json());

// Middleware CORS
// Fungsi cors() akan menambahkan header HTTP:
//   Access-Control-Allow-Origin: *
// Artinya React client di origin lain (misal localhost:5173) bisa mengakses API server
app.use(cors());

// ----------------------------
// Routes
// ----------------------------

// Route untuk /users
app.use('/users', usersRoutes);

// Route untuk /konsumen
app.use('/konsumen', konsumenRoutes);
// Route untuk /madnor
app.use('/mandor', mandorRoutes);
// Route untuk /pengawas
app.use('/pengawas', pengawasRoutes);
// Route untuk /proyek
app.use('/proyek', proyekRoutes);
// Route untuk /progres
app.use('/progres', progresRoutes);
// Route untuk /login
app.use('/login', loginRoutes);



// ----------------------------
// Jalankan server
// ----------------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
