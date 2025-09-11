// models/usersModel.js

import pool from '../config/db.js';

// Ambil semua user
const getAllUsers = async () => {
    const SQLQuery = 'SELECT * FROM tb_users';
    const result = await pool.query(SQLQuery);
    return result.rows; // hanya rows yang dikirim balik
};

// Tambah user baru
const createNewUser = async (body) => {
    const SQLQuery = `
        INSERT INTO tb_users (,name, email, password, alamat, role, url_poto)
        VALUES ('${body.name}', '${body.email}', '${body.password}', '${body.alamat}', ${body.role}, '${body.url_poto}')
        RETURNING *;
    `;
    const result = await pool.query(SQLQuery);
    return result.rows;
};

// Export sebagai named export
export {
    getAllUsers,
    createNewUser
};
