const pool = require('../db');

exports.findAll = () => {
  return pool.query('SELECT * FROM users');
};
