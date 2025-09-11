const userModel = require('../models/usersModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.json(users.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
