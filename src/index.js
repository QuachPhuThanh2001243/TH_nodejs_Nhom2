import dotenv, { config } from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './route/webRouter';
import path from 'path';
const app = express();
dotenv.config();
const port = process.env.PORT
configViewEngine(app)
app.use('/static', express.static(path.join(__dirname, 'public')))
initWebRoute(app)
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.listen(port , () => {
    console.log('listening on port ${port}')
})