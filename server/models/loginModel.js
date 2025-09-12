// models/loginModel.js
import pool from '../config/db.js';

// Ambil semua login
export const getAllLogin = async () => {
    const SQLQuery = 'SELECT * FROM tb_login';
    const result = await pool.query(SQLQuery);
    return result.rows;
};

// Ambil login berdasarkan email
export const getLoginByEmail = async (email) => {
    const SQLQuery = 'SELECT * FROM tb_login WHERE email = $1';
    const result = await pool.query(SQLQuery, [email]);
    return result.rows[0]; // mengembalikan 1 object
};

// Tambah login baru
export const createNewLogin = async (body) => {
    const SQLQuery = `
        INSERT INTO tb_login (email, password, status)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
    const values = [body.email, body.password, body.status || 'Off'];
    const result = await pool.query(SQLQuery, values);
    return result.rows[0]; // mengembalikan 1 object
};

// Update login berdasarkan ID
export const updateLoginById = async (id, body) => {
    const SQLQuery = `
        UPDATE tb_login
        SET email = $1, password = $2, status = $3
        WHERE id = $4
        RETURNING *;
    `;
    const values = [body.email, body.password, body.status, id];
    const result = await pool.query(SQLQuery, values);
    return result.rows[0]; // 1 object
};

// Delete login berdasarkan ID
export const deleteLoginById = async (id) => {
    const SQLQuery = 'DELETE FROM tb_login WHERE id = $1 RETURNING *;';
    const result = await pool.query(SQLQuery, [id]);
    return result.rows[0]; // 1 object
};
