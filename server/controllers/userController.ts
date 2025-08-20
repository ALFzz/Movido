import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/models";

interface JwtPayload {
    id: number;
    email: string;
    role: string;
}

const generateJwt = (id: number, email: string, role: string): string => {
    const secret = process.env.SECRET_KEY;
    if (!secret) {
        throw new Error("SECRET_KEY is not defined in environment variables");
    }

    return jwt.sign({ id, email, role }, secret, { expiresIn: "24h" });
};

class UserController {
    async registration(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password, role } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "Некорректный email или пароль",
                });
            }

            const candidate = await User.findOne({ where: { email } });
            if (candidate) {
                return res.status(409).json({
                    message: "Такой пользователь уже существует",
                });
            }

            const hashpassword = await bcrypt.hash(password, 5);
            const user = await User.create({ email, role, password: hashpassword });
            const token = generateJwt(user.id, user.email, user.role);

            return res.json({ token });
        } catch (error) {
            console.error("Ошибка при регистрации:", error);
            return res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({
                    message: "Пользователь не найден",
                });
            }

            const comparepassword = await bcrypt.compare(password, user.password);
            if (!comparepassword) {
                return res.status(401).json({
                    message: "Неверный пароль",
                });
            }

            const token = generateJwt(user.id, user.email, user.role);
            return res.json({ token });
        } catch (error) {
            console.error("Ошибка при логине:", error);
            return res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async check(req: Request & { user?: JwtPayload }, res: Response): Promise<Response> {
        if (!req.user) {
            return res.status(401).json({ message: "Не авторизован" });
        }

        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
}

export default new UserController();
