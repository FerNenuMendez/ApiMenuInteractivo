import { Router } from 'express'
import { getController, getByIdController, postController, deleteController } from '../../controllers/bebidas.controller.js'

export const bebidasRouter = Router()
bebidasRouter.get('/test', (req, res) => {
    res.status(200).send('Bebidas Router OK')
})
bebidasRouter.get('/id/:id', getByIdController)
bebidasRouter.get('/', getController)
bebidasRouter.post('/', postController)
bebidasRouter.delete('/:id', deleteController)

