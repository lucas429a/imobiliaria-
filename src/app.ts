import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { routes } from './routers';
import { handleErrors } from './middlewares/hancleError.middleware';

const app = express();
app.use(express.json());


app.use("/",routes)

app.use(handleErrors)

export default app;
