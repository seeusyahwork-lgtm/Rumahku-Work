//index.js


// Pemanggilan fungsi
const express = require('express');
const app = express();
const PORT = 3000;

const pool = require('./config/db'); // Import koneksi database

// Menanggil route
const usersRoutes = require('./routes/users');

// Memanggil Middleware 
const logReqest = require('./middlewares/logs');

// Penutupan Pemanggilan Fungsi





// Jalankan logs yang ada di middleware 
app.use(logReqest);

// Middleware Pengijinan JSON
app.use(express.json());


// Jalankan route
app.use('/users', usersRoutes);




// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




