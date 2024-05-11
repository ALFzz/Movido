const path = require('path')
require('dotenv').config({
  path: path.resolve('server/', '.env')
})
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')

const PORT = process.env.PORT;

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    }
    catch (e) {
        console.log(e)
    }
}

start();



// import express, { Express, Request, Response } from "express";
// import dotenv from "dotenv";

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT || 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

// app.listen(port, () => {
//   console.log(`[server]: Serv is running at http://localhost:${port}`);
// });