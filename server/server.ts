import path from "path";
import dotenv from "dotenv";

dotenv.config({
    path: path.resolve("server/", ".env"),
});

import express, { Application } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import sequelize from "./db";
import router from "./routes/server";

const PORT: number = Number(process.env.PORT) || 5000;

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

app.use("/api", router);

const start = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error("❌ Server error:", e);
    }
};

start();
