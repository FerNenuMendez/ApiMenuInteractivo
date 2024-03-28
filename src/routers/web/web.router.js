import express from 'express';

export const webRouter = express.Router();

// Ruta principal que sirve el archivo index.html
webRouter.get('/', (req, res) => {
    res.sendFile('../../index.html');
});

// Cualquier otra ruta que necesites para tu web
webRouter.get('/test', (req, res) => {
    res.send('Web Router Funcionando OK');
});

