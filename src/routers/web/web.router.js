import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const webRouter = express.Router();

// Ruta principal que sirve el archivo index.html
webRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});

// Ruta para servir archivos estáticos como CSS, JS, imágenes, etc.
webRouter.use('/static', express.static(path.join(__dirname, '../../static')));

// Cualquier otra ruta que necesites para tu web
webRouter.get('/test', (req, res) => {
    res.send('Web Router Funcionando OK');
});

