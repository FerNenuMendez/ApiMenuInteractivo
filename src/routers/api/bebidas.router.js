import { Router } from 'express'
import { getController, getByIdController, postController, deleteController } from '../../controllers/bebidas.controller.js'

export const bebidasRouter = Router()

bebidasRouter.get('/', getController)
bebidasRouter.get('/:id', getByIdController)
bebidasRouter.post('/', postController)
bebidasRouter.delete('/:id', deleteController)


bebidasRouter.get('/test', (req, res) => {
    res.status(200).send('Bebidas Router OK')
})