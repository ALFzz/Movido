import { Request, Response } from "express"
const {Film} = require('../models/models');

class UserController {
    async create(req: Request, res: Response): Promise<Record<string, any>> {
        const {name} = req.body;
        const film = await Film.create({name});
        return res.json(film)
    }

    async getAll(req: Request, res: Response): Promise<void> {
        
    }

    async getOne(req: Request, res: Response): Promise<void> {
        
    }
}

module.exports = new UserController()