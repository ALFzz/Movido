import { Request, Response } from "express";
import { Genre } from "../models/models";

class GenreController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ message: "Название жанра обязательно" });
            }

            const genre = await Genre.create({ name });
            return res.json(genre);
        } catch (error) {
            console.error("Ошибка при создании жанра:", error);
            return res.status(500).json({ message: "Не удалось создать жанр" });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const genres = await Genre.findAll();
            return res.json(genres);
        } catch (error) {
            console.error("Ошибка при получении жанров:", error);
            return res.status(500).json({ message: "Не удалось получить жанры" });
        }
    }
}

export default new GenreController();
