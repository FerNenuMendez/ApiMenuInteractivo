import express from 'express'
import cors from 'cors';
import { apiRouter } from '../routers/api/api.router.js'
import { webRouter } from '../routers/web/web.router.js'

export const app = express()

const corsOptions = {
    origin: '*', // 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
    optionsSuccessStatus: 200,
};

app.use('/static', express.static('./static'))
app.use(cors(corsOptions));
app.use('/', webRouter)
app.use('/api', apiRouter)

app.get('/test', (req, res) => {
    res.send('Api Funcionando OK')
})
