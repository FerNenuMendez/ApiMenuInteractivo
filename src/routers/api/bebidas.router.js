import { Router } from 'express'
import { getController, postController, deleteController } from '../../controllers/bebidas.controller.js'

export const bebidasRouter = Router()

bebidasRouter.get('/', getController)
bebidasRouter.post('/', postController)
bebidasRouter.delete('/:id', deleteController)
bebidasRouter.get('/test', (req, res) => {
    res.status(200).send('Bebidas Router OK')
})