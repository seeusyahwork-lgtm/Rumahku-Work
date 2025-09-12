// models/konsumenModel.js
import pool from '../config/db.js';

// Ambil semua Konsumen
export const getAllkonsumen = async () => {
    const SQLQuery = 'SELECT * FROM tb_konsumen';
    const result = await pool.query(SQLQuery);
    return result.rows;
};

// Tambah Konsumen baru
export const createNewkonsumen = async (body) => {
    const SQLQuery = `
        INSERT INTO tb_konsumen (name, email, password, alamat, role, url_poto)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;
    const values = [body.name, body.email, body.password, body.alamat, body.role, body.url_poto];
    const result = await pool.query(SQLQuery, values);
    return result.rows[0]; // mengembalikan 1 object
};

// Update Konsumen berdasarkan ID
export const updatekonsumenById = async (id, body) => {
    const SQLQuery = `
        UPDATE tb_konsumen
        SET name = $1, email = $2, password = $3, alamat = $4, role = $5, url_poto = $6
        WHERE id = $7
        RETURNING *;
    `;
    const values = [body.name, body.email, body.password, body.alamat, body.role, body.url_poto, id];
    const result = await pool.query(SQLQuery, values);
    return result.rows[0]; // 1 object
};

// Delete Konsumen berdasarkan ID
export const deletekonsumenById = async (id) => {
    const SQLQuery = `DELETE FROM tb_konsumen WHERE id = $1 RETURNING *;`;
    const result = await pool.query(SQLQuery, [id]);
    return result.rows[0]; // 1 object
};
