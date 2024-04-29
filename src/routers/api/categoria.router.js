import { Router } from 'express'
import { bebidasRouter } from './bebidas.router.js'
import { productosRouter } from './productos.router.js'

export const categoriaRouter = Router()

categoriaRouter.use('/bebidas', bebidasRouter)
categoriaRouter.use('/productos', productosRouter)
