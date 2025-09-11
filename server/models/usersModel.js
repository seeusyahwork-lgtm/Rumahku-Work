// models/usersModel.js

import pool from '../config/db.js';

// Ambil semua user
const getAllUsers = async () => {
    const SQLQuery = 'SELECT * FROM tb_users';
    const result = await pool.query(SQLQuery);
    return result.rows;
};

// Tambah user baru
const createNewUser = async (body) => {
    const SQLQuery = `
        INSERT INTO tb_users (name, email, password, alamat, role, url_poto)
        VALUES ('${body.name}', '${body.email}', '${body.password}', '${body.alamat}', ${body.role}, '${body.url_poto}')
        RETURNING *;
    `;
    const result = await pool.query(SQLQuery);
    return result.rows;
};

// Update user berdasarkan ID
const updateUserById = async (id, body) => {
    const SQLQuery = `
        UPDATE tb_users
        SET 
            name = '${body.name}',
            email = '${body.email}',
            password = '${body.password}',
            alamat = '${body.alamat}',
            role = ${body.role},
            url_poto = '${body.url_poto}'
        WHERE id = ${id}
        RETURNING *;
    `;
    const result = await pool.query(SQLQuery);
    return result.rows;
};

// 🗑️ Delete user berdasarkan ID
const deleteUserById = async (id) => {
    const SQLQuery = `
        DELETE FROM tb_users
        WHERE id = ${id}
        RETURNING *;
    `;
    const result = await pool.query(SQLQuery);
    return result.rows; // akan mengembalikan data user yang dihapus
};

// Export semua fungsi
export {
    getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById
};
