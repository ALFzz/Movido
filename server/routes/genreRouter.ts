import { Router } from "express";
import genreController from "../controllers/genreController";
import checkRole from "../middleware/checkRoleMiddleware";

const genreRouter: Router = Router();

genreRouter.post("/", checkRole("ADMIN"), genreController.create);
genreRouter.get("/", genreController.getAll);

export default genreRouter;
