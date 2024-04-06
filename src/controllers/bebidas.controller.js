import { bebidasService } from '../services/bebidas.service.js'

export async function getController(req, res, next) {
    try {
        const bebidas = await bebidasService.obtenerbebidas()
        res.result(bebidas)
    } catch (error) {
        next(error)
    }
}

export async function postController(req, res, next) {
    try {
        const Bebida = await bebidasService.agregarBebida(req.body)
        res.created(Bebida)
    } catch (error) {
        next(error)
    }
}

export async function deleteController(req, res, next) {
    try {
        const Bebida = await bebidasService.borrarBebida(req.body)
        res.result(Bebida)
    } catch (error) {
        next(error)
    }
}