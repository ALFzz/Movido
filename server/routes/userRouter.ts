import { Request, Response } from "express"

const UserRouter = require('express');
const userrouter = new UserRouter();
const userController = require('../controllers/userController');

userrouter.post('/registration', userController.registration)
userrouter.post('/login', userController.login)
userrouter.get('/auth', userController.check)

module.exports = userrouter;