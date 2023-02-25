const { User } = require("../models");

async function getAllUsers(req, res) {
  console.log(User);
  try {
    const data = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(data);
  } catch (err) {
    throw err;
  }
}
async function addNewUser(req, res) {
  const { email, password, age } = req.body;
  try {
    await User.create({
      email,
      age,
      password,
    });
    res.status(201).json({ message: "sent sucessfully" });
  } catch (err) {
    throw err;
  }
}
async function findOneUser(req, res) {
  try {
    const useremail = req.params.email;
    const user = await User.findOne({ where: { email: useremail } });
    res.json(user);
  } catch (err) {
    throw err;
  }
}
async function updateOneUser(req, res) {
  const useremail = req.params.email;
  const { age, password } = req.body;
  try {
    await User.update(
      { age: age, password: password },
      { where: { email: useremail } }
    );
    res.json({ message: "updated sucessfully" });
  } catch (error) {
    throw err;
  }
}
async function deleteOneUser(req, res) {
  const useremail = req.params.email;
  try {
    await User.destroy({ where: { email: useremail } });
    res.json({ message: "deleted sucessfully" });
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllUsers,
  addNewUser,
  findOneUser,
  updateOneUser,
  deleteOneUser,
};
