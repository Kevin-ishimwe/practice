const routes=require('express').Router()
const  { addUserInfo }=require('../controllers/contactControllers')
routes.post("/api/add/userInfo/:id",addUserInfo);
module.exports=routes