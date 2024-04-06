import { Router, json, urlencoded } from 'express'
import { pedidosRouter } from './pedidos.router.js'
import { productosRouter } from './productos.router.js'
import { bebidasRouter } from './bebidas.router.js'
import { manejoDeErrores } from '../../middlewares/manejoDeErrores.js'
import { respuestasMejoradas } from '../../middlewares/respuestasMejoradas.js'


export const apiRouter = Router()

apiRouter.use(respuestasMejoradas)
apiRouter.use(manejoDeErrores)
apiRouter.use(json())
apiRouter.use(urlencoded({ extended: true }))

apiRouter.use('/pedidos', pedidosRouter)
apiRouter.use('/productos', productosRouter)
apiRouter.use('/bebidas', bebidasRouter)

pedidosRouter.get('/test', (req, res) => {
    res.status(200).send('API Router OK')
})