// const express = require('express');

// const PORT = 5000;

// const app = express();

// app.listen(PORT, () => console.log('Server started on port ' + PORT));

// src/index.js
// src/index.js
// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});