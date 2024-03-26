import { Router } from 'express'
import { getController, postController, deleteController } from '../../controllers/pedidos.controller.js'

export const pedidosRouter = Router()

pedidosRouter.get('/', getController)
pedidosRouter.post('/', postController)
pedidosRouter.delete('/:id', deleteController)
pedidosRouter.get('/test', (req, res) => {
    res.status(200).send('Pedidos Router OK')
})
