import express from 'express';

//Create express server
const app = express();

//Routes
app.get('/', (req, res) => {
    console.log('ser requiere el /');
    res.json({
        ok: true
    })
});

//Listen petition
app.listen( 4000, () => {
    console.log(`Running server on ${4000}`);
})