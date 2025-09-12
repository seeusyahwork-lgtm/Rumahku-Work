// models/proyekModel.js
import pool from '../config/db.js';

// Ambil semua proyek
export const getAllproyek = async () => {
    const SQLQuery = 'SELECT * FROM tb_proyek';
    const result = await pool.query(SQLQuery);
    return result.rows;
};

// Tambah proyek baru
export const createNewproyek = async (body) => {
    const SQLQuery = `
        INSERT INTO tb_proyek (name, email, password, alamat, role, url_poto)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;
    const values = [body.name, body.email, body.password, body.alamat, body.role, body.url_poto];
    const result = await pool.query(SQLQuery, values);
    return result.rows[0]; // mengembalikan 1 object
};

// Update proyek berdasarkan ID
export const updateproyekById = async (id, body) => {
    const SQLQuery = `
        UPDATE tb_proyek
        SET name = $1, email = $2, password = $3, alamat = $4, role = $5, url_poto = $6
        WHERE id = $7
        RETURNING *;
    `;
    const values = [body.name, body.email, body.password, body.alamat, body.role, body.url_poto, id];
    const result = await pool.query(SQLQuery, values);
    return result.rows[0]; // 1 object
};

// Delete proyek berdasarkan ID
export const deleteproyekById = async (id) => {
    const SQLQuery = `DELETE FROM tb_proyek WHERE id = $1 RETURNING *;`;
    const result = await pool.query(SQLQuery, [id]);
    return result.rows[0]; // 1 object
};
