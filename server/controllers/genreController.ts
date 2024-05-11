import { Request, Response } from "express"
const {Genre} = require('../models/models');

class GenreController {
    async create(req: Request, res: Response): Promise<Record<string, any>> {
        const {name} = req.body;
        const genre = await Genre.create({name});
        return res.json(genre)
    }

    async getAll(req: Request, res: Response): Promise<void> {
        
    }

}

module.exports = new GenreController()