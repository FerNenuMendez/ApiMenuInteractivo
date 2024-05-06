import { Router } from 'express'
import { getController, getByIdController, postController, deleteController } from '../../controllers/productos.controller.js'

export const productosRouter = Router()

productosRouter.get('/', getController)
productosRouter.get('/:id', getByIdController)
productosRouter.post('/', postController)
productosRouter.delete('/:id', deleteController)

productosRouter.get('/test', (req, res) => {
    res.status(200).send('Productos Router OK')
})