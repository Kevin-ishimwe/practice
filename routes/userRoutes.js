const useRoutes = require("express").Router();
const {
  getAllUsers,
  addNewUser,
  findOneUser,
  updateOneUser,
  deleteOneUser,
} = require("../controllers/userControllers");
useRoutes.get("/api/get/users",getAllUsers)
useRoutes.post("/api/add/users",addNewUser);
useRoutes.get("/api/get/users/:email",findOneUser)
useRoutes.patch("/api/update/users/:email", updateOneUser);
useRoutes.delete("/api/delete/users/:email", deleteOneUser);
module.exports = useRoutes;
