import { Router } from 'express'

export const webRouter = Router()

webRouter.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'index.html' })
})