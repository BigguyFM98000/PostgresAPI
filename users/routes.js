const express = require('express') //import express module
const app = express();

//users routes
const {login} = require("../auth/login")
const {register} = require("../auth/register");
const userController = require("../users/controllers");

app.get('/getAll',userController.getAll);
app.get('/getById/:id',userController.getById);
app.delete('/deleteUser/:id',userController.deleteUser);
app.put('/updateUser/:id',userController.updateUser);
app.post('/login',login);
app.post('/register',register)

module.exports = app;