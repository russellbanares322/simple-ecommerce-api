import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from '../src/router/index';
import path from 'path';

const app = express();
dotenv.config()


const {PORT, MONGO_DB_URL} = process.env;

app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://z-commerce.vercel.app"]
}))


//Middleware
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, 'public')))
//Server
const server = http.createServer(app);


//Mongo db connection
server.listen(PORT, () => {
    console.log(`Good to go`)
})

mongoose.Promise = Promise;
mongoose.connect(MONGO_DB_URL);
mongoose.connection.on('error', (error: Error) => console.log(error))

//Routers
app.use("/", router())
