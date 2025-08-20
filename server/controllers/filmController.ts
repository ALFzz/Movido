import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Film } from "../models/models";

class FilmController {
    async create(req: any, res: Response): Promise<Response> {
        try {
            const { name, director, release_year, rating, small_description, big_description, country, genreId } = req.body;

            if (!req.files || !req.files.img_card) {
                return res.status(400).json({ error: "Файл изображения обязателен" });
            }

            const img_card = req.files.img_card as UploadedFile;
            const filename = uuidv4() + ".jpg";

            await img_card.mv(path.resolve(__dirname, "..", "static", filename));

            const film = await Film.create({
                name,
                director,
                release_year,
                rating,
                small_description,
                big_description,
                country,
                genreId,
                img_card: filename,
            });

            return res.json(film);
        } catch (error) {
            console.error("Ошибка при создании фильма:", error);
            return res.status(500).json({ error: "Не удалось создать фильм" });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const films = await Film.findAll();
            return res.json(films);
        } catch (error) {
            console.error("Ошибка при получении фильмов:", error);
            return res.status(500).json({ error: "Не удалось получить фильмы" });
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const film = await Film.findOne({ where: { id } });

            if (!film) {
                return res.status(404).json({ error: "Фильм не найден" });
            }

            return res.json(film);
        } catch (error) {
            console.error("Ошибка при получении фильма:", error);
            return res.status(500).json({ error: "Не удалось получить фильм" });
        }
    }
}

export default new FilmController();
