import { Request, Response } from "express"

class UserController {
    async registration(req: Request, res: Response): Promise<void> {

    }

    async login(req: Request, res: Response): Promise<void> {
        
    }

    async check(req: Request, res: Response): Promise<void> {
        const query = req.query
        res.json(query)
    }
}

module.exports = new UserController()