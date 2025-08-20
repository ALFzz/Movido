import { Router } from "express";
import filmRouter from "./filmRouter";
import userRouter from "./userRouter";
import genreRouter from "./genreRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/film", filmRouter);
router.use("/genre", genreRouter);

export default router;
