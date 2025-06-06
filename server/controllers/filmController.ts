import { Request, Response } from "express"
const uuid = require("uuid");
const path = require("path");
const {Film} = require('../models/models');

class FilmController {
    async create(req: any, res: Response): Promise<Record<string, any>> {
        const {name, director, release_year, rating, small_description, big_description, country, genreId } = req.body;
        const {img_card} = req.files
        let filename = uuid.v4()+ ".jpg";
        img_card.mv(path.resolve(__dirname, '..', 'static', filename))
        

        const film = await Film.create({name, director, release_year, rating, small_description, big_description, country, genreId, img_card: filename});
        
        return res.json(film)
    }

    async getAll(req: Request, res: Response):Promise<Record<string, any>> {
        let films;
        films = await Film.findAll()
        return res.json(films)
    }



    async getOne(req: Request, res: Response): Promise<Record<string, any>> {
        const {id} = req.params
        const film = await Film.findOne({where: {id}})
        return res.json(film)
        
    }
}

module.exports = new FilmController()