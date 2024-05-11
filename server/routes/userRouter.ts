import { Request, Response } from "express"

const UserRouter = require('express');
const userrouter = new UserRouter();

userrouter.post('/registration', )
userrouter.post('/login', )
userrouter.get('/auth', (req: Request, res: Response) => {
    res.json({message: 'All working'})
})

module.exports = userrouter;