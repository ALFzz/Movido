import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface UserJwtPayload extends JwtPayload {
    id: number;
    email: string;
    role: string;
}

export interface AuthRequest extends Request {
    user?: UserJwtPayload;
}

// Фабрика middleware для проверки роли
const checkRole = (role: string) => {
    return (req: AuthRequest, res: Response, next: NextFunction): Response | void => {
        if (req.method === "OPTIONS") {
            return next();
        }

        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Не авторизован" });
            }

            const token = authHeader.split(" ")[1];
            if (!token) {
                return res.status(401).json({ message: "Не авторизован" });
            }

            const secret = process.env.SECRET_KEY;
            if (!secret) {
                throw new Error("SECRET_KEY не определён в .env");
            }

            const decoded = jwt.verify(token, secret) as UserJwtPayload;
            if (decoded.role !== role) {
                return res.status(403).json({ message: "Нет доступа" });
            }

            req.user = decoded;
            next();
        } catch (e) {
            console.error("Ошибка JWT:", e);
            return res.status(401).json({ message: "Не авторизован" });
        }
    };
};

export default checkRole;
