import { Router } from "express";
import filmController from "../controllers/filmController";

const filmRouter: Router = Router();

filmRouter.post("/", filmController.create);
filmRouter.get("/", filmController.getAll);
filmRouter.get("/:id", filmController.getOne);

export default filmRouter;
