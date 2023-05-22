import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';


dotenv.config();

//Create express server
const app = express();

//Public directory
app.use( express.static('public') );

//Routes
app.use('/api/auth', authRoutes)
//TODO: crud

//Listen petition
app.listen( process.env.PORT, () => {
    console.log(`Running server on ${process.env.PORT}`);
})