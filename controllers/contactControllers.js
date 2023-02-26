const { UserInfo } = require("../models");

async function addUserInfo(req, res) {
  const UserId = req.params.id;
  const { names, category, adress } = req.body;
  try {
    await UserInfo.create({ names,category, adress,UserId});
    res.status(201).json({ message: "info added to profile" });
  } catch (error) {
    throw error;
  }
}
module.exports = { addUserInfo };
