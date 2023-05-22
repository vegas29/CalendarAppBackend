import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import { dbConnection } from './database/config.js';


dotenv.config();

//Create express server
const app = express();

//Connection database
dbConnection();

// CORS

app.use(cors());

//Public directory
app.use( express.static('public') );

//Read and parseo of body
app.use( express.json() );

//Routes
app.use('/api/auth', authRoutes)
//TODO: crud

//Listen petition
app.listen( process.env.PORT, () => {
    console.log(`Running server on ${process.env.PORT}`);
})