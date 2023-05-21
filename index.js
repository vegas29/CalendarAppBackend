import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

//Create express server
const app = express();

//Public directory
app.use( express.static('public') );

//Routes
// app.get('/', (req, res) => {
//     console.log('ser requiere el /');
//     res.json({
//         ok: true
//     })
// });

//Listen petition
app.listen( process.env.PORT, () => {
    console.log(`Running server on ${process.env.PORT}`);
})