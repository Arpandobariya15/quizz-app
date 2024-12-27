import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';

config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
connect();

const PORT = process.env.PORT || 8080;

app.use('/api', router);

app.listen(PORT , (err)=>{
    console.log(`app is runnig on ${PORT}`);
})