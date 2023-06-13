import 'express-async-errors'
import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import { routes } from "./routes";
import { app, serverHttp } from './http';
import { errorMiddleware } from './middlewares/Error';

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(5555, () => console.log("SERVER RUNNING IN PORT 5555",));